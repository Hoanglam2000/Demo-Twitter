import { Link } from 'react-router-dom';
import styles from './MoreButton.module.css';

function MoreButton(params) {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.more_button} to={'/explore'}>
                Show more
            </Link>
        </div>
    );
}
export default MoreButton;
