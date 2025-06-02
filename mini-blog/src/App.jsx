import './index.css';
import Header from "./components/header"
import MainPost from './components/mainPost.jsx';
import PostPreview from "./components/postPreview"
import Footer from "./components/footer"
import Categories from "./components/categories.jsx"
import { postInformation } from "./data/index.js"
import "./App.css"

function App() {
  return (
    <div>
      <Header/>
      <MainPost/>
      <Categories />
      <h2>Recent blog posts</h2>
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
      <Footer />
    </div>
  );
}

export default App;
