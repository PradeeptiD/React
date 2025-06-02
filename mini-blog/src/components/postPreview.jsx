
import "./postPreview.css"

function PostPreview({ title, description, image, writerImg, writerName, date}) {
    return(
        <div className="preview">
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