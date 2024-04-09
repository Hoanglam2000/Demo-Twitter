import {BsStars} from 'react-icons/bs'
import {useContext} from 'react';


import styles from './Twitters.module.css';
import ProfileImg from './Twiterr-img';
import ContentTwiter from './ContentTwiter';
import Status from './Status';



import img from './Twiterr-img/Avatar.png'

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
                        nameListTwitter={'Claim Airdrops'}
                        locoListTwitter={'AirDrops0637'}
                        timListTwitter={'8h'}
                        contentListTwitter={
                            'You will receive 5 $BNB = $1,650.00 in your wallet, just like, follow and rt, Retweet pinned  post.'                           
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
