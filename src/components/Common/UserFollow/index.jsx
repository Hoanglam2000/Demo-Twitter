import styles from './UserFollow.module.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Button from '../Button';
import UnFollowModal from '../UnFollowModal';
import { useState } from 'react';
import { useMemo } from 'react';
import { FOLLOWING_STATUS } from '../../../constants';

function UserFollow({data}) {
    const [followingStatus, setFollowingStatus] = useState(FOLLOWING_STATUS.none);
    const [isTriggerUnFollow, setIsTriggerUnFollow] = useState(false);
    const handleChangeFollowingStatus = (status) => {
        setFollowingStatus(status);
        if (status === FOLLOWING_STATUS.following && followingStatus === FOLLOWING_STATUS.following) {
            setIsTriggerUnFollow(true);
            return;
        }
        if (status === FOLLOWING_STATUS.unfollowing) {
            setIsTriggerUnFollow(false);
        }
    };
    const handleCancelChangeFollowingStatus = () => {
        setIsTriggerUnFollow(false);
    };
    const isShowUnfollowModal = useMemo(
        () => followingStatus === FOLLOWING_STATUS.following && isTriggerUnFollow,
        [isTriggerUnFollow, followingStatus],
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <img
                    src={data.photoUrl}
                    alt={'avrtar'}
                    className={styles.avatar}
                />
                <div className={styles.info}>
                    <h1 className={styles.user_name}>
                        {data.author}
                        <span className={styles.auth_icon}>
                            <BsFillPatchCheckFill />
                        </span>
                    </h1>
                    <h1 className={styles.user_id}>{data.userName}</h1>
                </div>
                <div onClick={() => handleChangeFollowingStatus(FOLLOWING_STATUS.following)} className={styles.button}>
                    {followingStatus === FOLLOWING_STATUS.following ? (
                        <Button isFolowingButton>Following</Button>
                    ) : (
                        <Button>Follow</Button>
                    )}
                </div>
            </div>
            <UnFollowModal
                onShow={isShowUnfollowModal}
                onHidden={() => handleChangeFollowingStatus(FOLLOWING_STATUS.unfollowing)}
                onCancel={() => handleCancelChangeFollowingStatus()}
            />
        </div>
    );
}

export default UserFollow;
