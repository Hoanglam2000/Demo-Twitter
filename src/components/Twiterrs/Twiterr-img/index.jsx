import styles from './ProfileImg.module.css';

function ProfileImg({ img, alt }) {
    return (
        <div className={`${styles.profileImg}`}>
            <img src={img} alt={alt}></img>
        </div>
    );
}

export default ProfileImg;
