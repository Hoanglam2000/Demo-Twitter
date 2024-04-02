import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { HiOutlineUpload } from 'react-icons/hi';
import { TbRepeat,TbBallpen } from 'react-icons/tb';
import { IoIosMore } from 'react-icons/io';
import { BiLinkAlt,BiBookmarkPlus } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import {useState} from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
  } from '@chakra-ui/react'
  


import ListImgTwitter from '../ListImgTwitter';
import styles from './ContentTwiter.module.css';

function ContentTwiter({
   
    nameListTwitter,
    locoListTwitter,
    timListTwitter,
    onClicked,
    contentListTwitter,
    imgListTwitter,
    altListTwitter,
    videoListTwitter,
    titleListListTwitter,


}) 

{
    const [numberHeart, setnumberHeart] = useState(100)
    const [colorHeart, setcolorHeart] = useState(false)

  const colortoggle = colorHeart ? styles.active : null;  
  const HandleHeart = () => { 
    
    setcolorHeart(colorHeart => !colorHeart)
    if(numberHeart <=  100) {
      setnumberHeart(numberHeart + 1)
      
    } else {
      setnumberHeart(numberHeart - 1)
    }}


    return (
        <div className={`${styles.CardMain}`}>
            <div className={`${styles.CardHeader}`}>
                <div className={`${styles.aCardHeader}`}>
                    <a href={locoListTwitter}> {nameListTwitter}</a>
                </div>
                <div className={`${styles.spanCardHeader}`}>
                <span>
                    @{locoListTwitter} · <span>{timListTwitter}</span>
                </span>
                </div>

                <div className={styles.more}>
                    <div className={styles.moress}>
                    <button>
                        <IoIosMore size={20} />
                    </button>
                    </div>
                </div>
            </div>

            <div className={`${styles.CardContent}`}>
                <p>{contentListTwitter}</p>
            </div>
            <div className={`${styles.CardFooter}`}>
                <ListImgTwitter imgList={imgListTwitter} altList={altListTwitter} />
            </div>
            <div className={styles.bar}>
                <div className={`${styles.reply} ${styles.item_bar}`}>
                    <div className={styles.icon_bar}>
                        <FaRegComment />
                    </div>
                    <span>100</span>
                </div>
                <div className={`${styles.retweet} ${styles.item_bar}`}>
                <Popover    >
                    <PopoverTrigger>
                        <Button  variant=''>
                            <div className={styles.icon_bar}> <TbRepeat /> </div>
                            <span>110</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className={styles.modal}>
                        <PopoverBody>
                            <div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <TbRepeat size={20} /> </div>
                                    <div className={styles.icon_bar2}>Retweet</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div  className={styles.icon_bar2}> <TbBallpen size={20} /> </div>
                                    <div className={styles.icon_bar2}>Quote Tweet</div>
                                </button>
                                </div>
                                
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </div>

                <div className={`${styles.like} ${styles.item_bar} ${colortoggle}`}onClick={HandleHeart}>
                    <div className={`${styles.icon_bar} ${colortoggle}`}>
                        <FaRegHeart />
                    </div>
                    <span >{numberHeart}</span>
                </div>
                <div className={`${styles.share}`}>
                <Popover >
                    <PopoverTrigger>
                        <Button  variant=''>
                        <div className={styles.icon_bar}>
                        <HiOutlineUpload />
                        </div>
                        <span>152</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent w='230px' className={styles.modal}>
                        <PopoverBody >
                            <div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div className={styles.icon_bar2} > <BiLinkAlt size={20} /> </div>
                                    <div className={styles.icon_bar2}>Copy link to Tweet</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div  className={styles.icon_bar2}> <FiMail size={20} /> </div>
                                    <div className={styles.icon_bar2}>Send via Direct Message</div>
                                </button>
                                </div>
                                <div className={styles.icon_bar1}>
                                <button>
                                    <div  className={styles.icon_bar2}> <BiBookmarkPlus size={20} /> </div>
                                    <div className={styles.icon_bar2}>Bookmark</div>
                                </button>
                                </div>
                                
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}

export default ContentTwiter;
