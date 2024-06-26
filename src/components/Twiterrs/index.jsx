import {BsStars} from 'react-icons/bs'
import {useContext} from 'react';


import styles from './Twitters.module.css';
import ProfileImg from './Twiterr-img';
import ContentTwiter from './ContentTwiter';
import Status from './Status';



import img from './Twiterr-img/Play.png'

import { DataContext } from '../../context/context';




function Twitters() {
    const datatw = useContext(DataContext)
    // console.log(datatw.tweets);
    const data  = datatw?.tweets;


    return (
        <>
            <div className={styles.home}>
                <div className={styles.homein}>
                    <span>Home</span>
                    <div className={styles.iconhome}>
                        <BsStars size={20} />
                    </div>
                </div>
            </div>
            <div className={styles.states}>
                <Status />
                
            </div>

            <div className={styles.Twitters}>
                <div className={styles.img}>
                    <ProfileImg img={img} alt={'No img'} />
                </div>
                <div className={styles.card}>
                    <ContentTwiter
                        nameListTwitter={'Bowling Green Bobcat Hockey'}
                        locoListTwitter={'bgbobcathockey'}
                        timListTwitter={'8h'}
                        contentListTwitter={
                            'It’s a Bobcat Hockey GAMEDAY! The Bobcat varsity  will hit the ice today for their first preseason game of the year  against Shaker Heights at 12pm @ BGSU. JV will play tonight at 8:30 against Perrysburg at Tamo.'
                        }
                        imgListTwitter={img}
                        altListTwitter={'main img'}
                    />
                </div>
                


            </div>

                {
                    data?.map(data => {
                        console.log(data.timeTwitter)
                        return(

                            <div className={styles.Twitters} key={data.id}>
                                <div className={styles.img}>
                                    <ProfileImg img={data.imgUser} />
                                </div>
                                <div className={styles.card}>
                                    <ContentTwiter
                                    
                                    nameListTwitter={data.nameTwitter}
                                    locoListTwitter={data.locoTwitter}
                                    timListTwitter={data.timeTwitter}
                                    contentListTwitter={data.contenTwitter}
                                    imgListTwitter={data.imgTwitter}
                                
                                    />
                                    </div>
                            </div>
                        )
                        
                    })
                }
        </>
    );
}

export default Twitters;
