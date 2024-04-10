
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsChevronCompactDown } from 'react-icons/bs';
import { BiWorld, BiPoll } from 'react-icons/bi';
import { FiImage } from 'react-icons/fi';
import { AiOutlineFileGif } from 'react-icons/ai';
import { CiFaceSmile } from 'react-icons/ci';
import { TbCalendarTime } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAdd } from 'react-icons/md';
import { CircularProgress } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
  } from '@chakra-ui/react'

  import { Text } from '@chakra-ui/react'


import { uploadImage } from '../../../utils';
import styles from './Status.module.css';
import ProfileImg from '../Twiterr-img/index';
import img from '../Twiterr-img/Avatar.png';
import { addTweet } from '../../../services/getData';

function Status() {
    const [count, setCount] = useState('');
    const [ishide, setIsHide] = useState(false);
    const [isopacity, setIsOpacity] = useState(false);
    const [preview, setPreview] = useState();
    const hide = ishide ? '' : `${styles.hide}`;
    const opacity = isopacity ? '' : `${styles.opacity}`;
    const handleTweet = () => {
        if (count.length > 0) {
            setIsHide(true);
            setIsOpacity(true);
        }
        if (count.length === 0) {
            setIsHide(false);
            setIsOpacity(false);
        }
    };

    const CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/assignmentjs/image/upload';
    const CLOUDINARY_PRESET = 'ldfqwprz';

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (values) => {
        try {
            const img = await uploadImage(values.imgTwitter[0], CLOUDINARY_API, CLOUDINARY_PRESET);
            values.imgTwitter = img.data.url;
            const docID = uuidv4();
            const data = {
                ...values,
                id: uuidv4(),
                nameTwitter: 'President Biden',
                imgUser: 'https://pbs.twimg.com/media/FhKjheiX0AEhPkR?format=jpg&name=small',
                locoTwitter: 'POTUS',
                timeTwitter: moment().format('MMMM Do YYYY, h:mm:ss a'),
            };
            console.log(data);
            addTweet('tweets', data, docID);
            // const doc = Math.floor(Math.random() * 100000) + 1;
            // await db.collection('tweets').doc(doc).set(data);
            reset();
            setPreview();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className={styles.status}>
                <div className={styles.user}>
                    <ProfileImg img={img} alt={'No img'} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {preview !== undefined ? (
                        <div className="mt-1 w-40 h-40 relative">
                            <img src={preview} alt="Preview Image" className="h-40 w-40 rounded-sm object-cover" />
                        </div>
                    ) : (
                        ''
                    )}
                    <input {...register('contenTwitter')} />  
                    <input
                        type="file"
                        {...register('imgTwitter')}
                        onChange={(e) => {
                            setPreview(URL.createObjectURL(e.target.files[0]));
                        }}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Status;
