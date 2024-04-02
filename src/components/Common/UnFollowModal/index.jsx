import Button from '../Button';
import styles from './UnFollowModal.module.css';
function UnFollowModal({ onShow, onHidden, onCancel }) {
    return (
        <div className={styles.wrapper} style={onShow ? { display: 'block' } : { display: 'none' }}>
            <div className={styles.content}>
                <h2 className={styles.header}>Unfollow this use</h2>
                <p className={styles.title}>
                    Their Tweets will no longer show up in your home timeline. You can still view their profile, unless
                    their Tweets are protected.
                </p>
                <Button onClick={onHidden}>Unfollow</Button>
                <Button isCancelButton onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default UnFollowModal;
