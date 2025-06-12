import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';


import ListRenderer from "./listRenderer";
import commentsByPost from "../data/commentsData";
import "./commentSection.css"

const CommentSection = ({ postId }) => {
    const comments = commentsByPost[postId] || [];

    return (
        <div className="comments-section-container">
            <h3 className="comments">Comments</h3>
            <ListRenderer
                items={comments}
                renderItem={(comment) => (
                <div className="comment-item">
                    <img className="comment-author-image" src={comment.image}  alt={comment.author} />
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
                emptyMessage="No comments yet."
            />
        </div>
    );
};

export default CommentSection;
