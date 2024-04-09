
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
                {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.box}>
                    <div className={styles.eve}>
                    <Popover>
                        <PopoverTrigger>
                            <Button variant='unstyled'> 
                                <div className={styles.evepop}>
                                <span>Everyone</span>
                                <div className={styles.iconeven}>
                                    <BsChevronCompactDown  size={12}/>
                                </div>
                                </div>
                            </Button>
                        </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody className={styles.popBody}>
                            <div className={styles.poptext}>
                            <Text as='b' color='#000' fontSize='18px'  >Choose audience</Text>
                            </div>
                            <div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <TfiWorld size={20} /> </div>
                                    <div className={styles.icon_bar3}>Everyone</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <TfiWorld size={20} /> </div>
                                    <div className={styles.icon_bar3}>Everyone</div>
                                </button>
                                </div>
        
                                
                            </div>

                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                    </div>
                    <div className={styles.happen}>
                        <input
                            // value={count}
                            type="text"
                            {...register('content')}
                            placeholder="What happening?"
                            // onChange={(e) => setCount(e.target.value)}
                        />
                        {preview !== undefined ? (
                            <div className="mt-1 w-40 h-40 relative">
                                <img src={preview} alt="Preview Image" className="h-40 w-40 rounded-sm object-cover" />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className={styles.reply}>
                    <Popover className={styles.popBody}>
                        <PopoverTrigger>
                            <Button variant='unstyled'> 
                                <div className={styles.evepop}>
                                <div className={styles.iconreply}>
                                <BiWorld size={16} />
                                </div>
                                <span>Everyone can reply</span>
                                </div>
                            </Button>
                        </PopoverTrigger>
                    <PopoverContent w='300px'>
                        <PopoverBody >
                            <div className={styles.poptext1}>
                                <Text as='b' color='#000' fontSize='18px'  >Who can reply?</Text>
                                <Text color='#000' fontSize='13px'  >Choose who can reply to this Tweet. Anyone mentioned can always reply.</Text>
                            </div>
                            <div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <TfiWorld size={20} /> </div>
                                    <div className={styles.icon_bar3}>Everyone</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <FiUserCheck size={20} /> </div>
                                    <div className={styles.icon_bar3}>People you follow</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <Text fontSize='20px'>@</Text> </div>
                                    <div className={styles.icon_bar3}>Only people you mention</div>
                                </button>
                                </div>
        
                                
                            </div>

                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                    </div>
                    <div className={styles.bortop}></div>
                    <div className={styles.unit} onClick={handleTweet}>
                        <div className={styles.iconunit}>
                            <div className={styles.iconunitimg}>
                                <label htmlFor="img">
                                    <FiImage size={20} />
                                </label>
                                <input
                                    type="file"
                                    id="img"
                                    {...register('photoUrls')}
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        setPreview(window.URL.createObjectURL(e.target.files[0]));
                                    }}
                                />
                            </div>
                            <div className={styles.iconunitimg}>
                                <AiOutlineFileGif size={20} />
                            </div>
                            <div className={styles.iconunitimg}>
                                <BiPoll size={20} />
                            </div>
                            <div className={styles.iconunitimg}>
                                <CiFaceSmile size={20} />
                            </div>
                            <div className={styles.iconunitimg}>
                                <TbCalendarTime size={20} />
                            </div>
                            <div className={styles.iconunitimg}>
                                <HiOutlineLocationMarker size={20} />
                            </div>
                        </div>
                        <div className={styles.tweet}>
                            <div className={`${styles.iconreply} ${hide}`}>
                                <CircularProgress value={count.length} size="24px" />
                            </div>
                            <div className={`${styles.hrtweet} ${hide}`}></div>
                            <div className={`${styles.addtweet} ${hide}`}>
                                <MdAdd size={20} />
                            </div>
                            <button type="submit" className={`${opacity}`}>
                                Tweet
                            </button>
                        </div>
                    </div>
                </form> */}
            </div>
        </>
    );
}

export default Status;
