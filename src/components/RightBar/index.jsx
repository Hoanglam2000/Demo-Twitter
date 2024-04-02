import Footer from '../Common/Footer';
import HashTagContainer from '../Common/HashTagContainer';
import UserContainer from '../Common/UserContainer';
import InputRight from '../Common/InputRight'

import styles from './RightBar.module.css';

function RightBar() {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <InputRight/>
            </div>
            <div className={styles.content}>
                <HashTagContainer />
                <UserContainer />
            </div>
            <Footer />
        </div>
    );
}

export default RightBar;
