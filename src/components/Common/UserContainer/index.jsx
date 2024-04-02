import { useContext } from 'react';
import { UserFollowerContex } from '../../../context/context';
import MoreButton from '../MoreButton';
import UserFollow from '../UserFollow';
import styles from './UserContainer.module.css';

function UserContainer() {
    const userFollowData = useContext(UserFollowerContex)
    console.log(userFollowData);
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>Who you follow</header>
            {userFollowData.map((userItem, index) => {
                console.log(userItem);
                return (
                    <UserFollow key={index} data={userItem}/>
                )
            })}
            <MoreButton />
        </div>
    );
}

export default UserContainer;
