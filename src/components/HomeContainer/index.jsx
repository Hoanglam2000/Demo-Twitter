import Comment from '../Comments';
import CommentInput from '../Form/CommentInput';
import RightBar from '../RightBar';
import Twitters from '../Twiterrs';
import style from './HomeContainer.module.css';

function HomeContainer() {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Twitters />
                <CommentInput />
                <Comment />
            </div>
            <RightBar />
        </div>
    );
}

export default HomeContainer;
