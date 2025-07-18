import { useLocation } from 'react-router-dom';
import CommentSection from './commentSection';
import "./commentSection.css"

const PostDetail = () => {
    const location = useLocation();
    const post = location.state?.post;

    if (!post) return <p className='post-not-found'>Post not found.</p>;

    return (
        <div className='post-container'>
            <img className='comments-post-image' src={post.image} alt={post.title} />
            <h2 className='comments-post-title'>{post.title}</h2>
            <CommentSection postId={post.id} />
        </div>
    );
};

export default PostDetail;
