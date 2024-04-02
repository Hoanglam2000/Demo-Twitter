import { useContext } from 'react';
import { HashTagContex } from '../../../context/context';
import HashTag from '../HashTag';
import MoreButton from '../MoreButton';
import styles from './HashTagContainer.module.css';
function HashTagContainer() {

    const hashTagData = useContext(HashTagContex)

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>Trends for you</header>
            {hashTagData.map((hashTagItem, index) => {
                return (
                    <HashTag key={index} data={hashTagItem}/>
                )}
            )}
            <MoreButton />
        </div>
    );
}

export default HashTagContainer;
