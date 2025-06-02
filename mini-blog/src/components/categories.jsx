import "./categories.css"

function Categories() {
    return(
        <div className="categories">
            <button className="all-posts">All Posts</button>
            <button className="category">AI</button>
            <button className="category">Data Science</button>
            <button className="category">Cybersecurity</button>
            <button className="category">Web Development</button>
            <button className="category">DevOps</button>
            <button className="category">QA</button>
            <button className="category">UI/UX Design</button>
        </div>
    );
}

export default Categories;