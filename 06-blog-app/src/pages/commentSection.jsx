//done
import { useAuth } from "../context/authContext";
import commentsByPost from "../data/commentsData";
import ListRenderer from "../components/listRenderer";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import "./commentSection.css";

function Comments() {
    const { user } = useAuth();

    const allComments = Object.values(commentsByPost).flat();
    const userComments = allComments.filter(comment => comment.author === user?.name);

    return (
        <div className="comments-section-container">
        <h2 className="comments">Your Comments</h2>
        <ListRenderer
            items={userComments}
            renderItem={(comment) => (
            <div className="comment-item" key={comment.id}>
                <img className="comment-author-image" src={comment.image} alt={comment.author} />
                <div className="comment-author-text">
                <p className="comment-author"><strong>{comment.author}</strong></p>
                <p className="comment-text">{comment.text}</p>
                <div className="actions">
                    <a className="comment-actions" href="#">reply</a>
                    <a className="comment-actions" href="#">share</a>
                    <a className="comment-actions" href="#">100 likes</a>
                    <a className="like" href="#"><FaThumbsUp /></a>
                    <a className="like" href="#"><FaThumbsDown /></a>
                </div>
                </div>
            </div>
            )}
            emptyMessage="You haven’t posted any comments yet."
        />
        </div>
    );
}

export default Comments;
