import styles from './ListImgTwitter.module.css';

function ListImgTwitter({ imgList, altList }) {
    return (
        <div className={`${styles.ListImgTwitter}`}>
            <img src={imgList} alt={altList} />
        </div>
    );
}

export default ListImgTwitter;
