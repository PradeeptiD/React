//done
import { Link } from "react-router-dom";
import "./postList.css"; // optional
import "./postPreview.css"; // reuse existing styles

const posts = [
    {
        id: "1",
        title: "First Blog Post",
        description: "A short intro to the first post.",
        image: "https://via.placeholder.com/600x300",
        writerImg: "https://via.placeholder.com/40",
        writerName: "Alice",
        date: "July 3, 2025",
    },
    {
        id: "2",
        title: "Second Blog Post",
        description: "Another preview for a blog post.",
        image: "https://via.placeholder.com/600x300",
        writerImg: "https://via.placeholder.com/40",
        writerName: "Bob",
        date: "July 2, 2025",
    },
];

function PostList() {
    return (
        <div className="post-list">
        {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className="post-link">
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
            </Link>
        ))}
        </div>
    );
}

export default PostList;
