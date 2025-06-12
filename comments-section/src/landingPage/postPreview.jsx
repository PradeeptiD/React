import { useNavigate } from 'react-router-dom'
import "./postPreview.css"

function PostPreview({ id, title, description, image, writerImg, writerName, date}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${id}`, {
            state: {
                post: {
                    id, 
                    title, 
                    description, 
                    image,
                    writerImg,
                    writerName,
                    date
                }
            }
        });
    };

    return(
        <div className="preview" onClick={handleClick} style={{cursor: "pointer"}}>
            <img className="image" src={image} alt="{title}" />
            <div className="post-text">
                <h2 className="title">{title}</h2>
                <p className="post-description"> {description} </p>
                <div className="authorInfo">
                    <div className="author">
                        <img className="writerImg" src={writerImg} alt="{writerName}" />
                        <p>{writerName}</p>
                    </div>
                    <p> • </p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;