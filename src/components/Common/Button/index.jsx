import { useState } from 'react';
import styles from './Button.module.css';

function Button({ children, isFolowingButton = false, isCancelButton = false, ...props }) {
    const [isUnfollow, setIsUnfollow] = useState(false);
    const cancelButton = isCancelButton ? `${styles.button_cancel}` : '';
    const unFllowButton = isFolowingButton ? `${styles.button_unfollow}` : '';

    const handleHoverInButton = () => {
        if (isFolowingButton) {
            setIsUnfollow(true);
        }
    };
    const handleHoverOutButton = () => {
        if (isFolowingButton) {
            setIsUnfollow(false);
        }
    };

    return (
        <>
            <button
                className={`${styles.wrapper} ${cancelButton} ${unFllowButton}`}
                onClick={props.onClick}
                onMouseOver={handleHoverInButton}
                onMouseOut={handleHoverOutButton}
            >
                <span>{isUnfollow ? 'UnFollow' : children}</span>
            </button>
        </>
    );
}

export default Button;
