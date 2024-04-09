// import { CloseIcon, SearchIcon } from '../components/Icon';
import styles from './Explore.module.css';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

import UserContainer from '../../components/Common/UserContainer';
import Footer from '../../components/Common/Footer'
import HashTagContainer from '../../components/Common/HashTagContainer';


function Explore() {
    return (
        <div className={styles.apps}>
            <div>
                <div className={styles.wapper}>
                        <div className={styles.search}>
                            <BiSearch />
                        </div>
                        <input className={styles.input_txt} type="text" placeholder="Search Twitter"></input>
                        <div className={styles.close}>
                            <AiOutlineSetting/>
                        </div>
                </div>
                <div className={styles.content}>
                        <img src='https://mega.com.vn/media/news/0106_hinh-nen-may-tinh-full-hd88.jpg' alt="COnten ảnh" className={styles.img} />

                        <div className={styles.content_text}>
                            <h4 className={styles.text}>Wellcom to for .LIVE</h4>
                            <h1 className={styles.title}>LUNA to the Moon !! moon in lake !</h1>
                        </div>
                </div>
                <div className={styles.hashtag}>
                        <HashTagContainer/>
                </div>
                 </div>
               <div>
                    <div className={styles.usercontainer}>
                        <UserContainer/>
                        <Footer/>
                     </div>
               </div>
        </div>
    );
}
export default Explore;
