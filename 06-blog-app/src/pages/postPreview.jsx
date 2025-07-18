//done
import { useParams } from "react-router-dom";
import "./postPreview.css";

const fakePosts = {
    "1": {
        title: "First Blog Post",
        description: "This is the first blog post preview content.",
        image: "https://via.placeholder.com/600x300",
        writerImg: "https://via.placeholder.com/40",
        writerName: "Alice",
        date: "July 3, 2025",
    },
    "2": {
        title: "Second Blog Post",
        description: "This is the second blog post preview content.",
        image: "https://via.placeholder.com/600x300",
        writerImg: "https://via.placeholder.com/40",
        writerName: "Bob",
        date: "July 2, 2025",
    },
};

function PostPreview() {
    const { postId } = useParams();
    const post = fakePosts[postId];

    if (!post) return <p>Post not found.</p>;

    return (
        <div className="preview">
        <img className="image" src={post.image} alt={post.title} />
        <div className="post-text">
            <h2 className="title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <div className="authorInfo">
            <div className="author">
                <img className="writerImg" src={post.writerImg} alt={post.writerName} />
                <p>{post.writerName}</p>
            </div>
            <p> • </p>
            <p>{post.date}</p>
            </div>
        </div>
        </div>
    );
}

export default PostPreview;
