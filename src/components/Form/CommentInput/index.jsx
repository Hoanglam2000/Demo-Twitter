import React from 'react';
import styles from './CommentInput.module.css';


const CommentInput = () => {
    return (
        <div className={styles.container}>
            <img
                alt="Quyết Phạm"
                draggable="true"
                src="https://pbs.twimg.com/profile_images/1588920938405371905/hTs2-9eH_bigger.png"
                className="css-9pa8cd"
            />
            <input type="text" placeholder="Post your reply" />
            <button>Reply</button>
        </div>
    );
};

export default CommentInput;
