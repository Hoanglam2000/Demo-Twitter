import styles from './HashTag.module.css';
import { CgMoreAlt } from 'react-icons/cg';

function HashTag({data}) {
    return (
        <div className={styles.wrapper}>
            <h5 className={styles.country}>{data.local}</h5>
            <h2 className={styles.tag_name}>{data.tagName}</h2>
            <h5 className={styles.tweets}>{data.tweets} Tweets</h5>
            <div className={styles.icon}>
                <CgMoreAlt />
                <div className={styles.more}>More</div>
            </div>
        </div>
    );
}

export default HashTag;
