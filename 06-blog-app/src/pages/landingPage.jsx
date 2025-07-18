import React from 'react';

import MainPost from "../components/mainPost";
import Categories from "../components/categories";
import PostPreview from "./postPreview";
import "./postPreview.css"
import { postInformation } from "../../../mini-blog/src/data";

function LandingPage () {
    return(
        <div>
            <MainPost/>
            <Categories/>
            <div className="post-container">
                {postInformation.map(({id, title, description, image, writerImg, writerName, date}) => (
                    <PostPreview 
                        key={id} 
                        title={title} 
                        description={description} 
                        image={image} 
                        writerImg = {writerImg}
                        writerName = {writerName}
                        date = {date}
                    />
                ))}
            </div>
        </div>
    );
}

export default LandingPage;