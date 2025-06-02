import "./mainPost.css"

function MainPost() {
    const imageSrc = "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div>
            <div className="main-post-container">
                <div className="main-post-image-wrapper">
                    <img className="main-post-image" src={imageSrc} alt="Article photo" />
                </div>
                <div className="main-post-text">
                    {/* <p className="featured">Featured</p> */}
                    <a href="#">
                        <h2>Breaking Into Software Engineering: Adviced from the Arbyte Solutions Founder</h2>
                    </a>
                    <p className="description">Curious how to land your first role in tech? In this post, the founder of Arbyte shares real-world advice on navigating the software engineering landscape — from building skills to standing out to employers. Whether you're self-taught or switching careers, this is a must-read.</p>
                </div>
            </div>
        </div>
    );
}

export default MainPost;