import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import LandingPage from './landingPage/landingPage';
import PostDetail from './commentsPage/postDetail';

function App() {
  return(
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post/:postId" element={<PostDetail/>}/>
        </Routes>

        <Footer />
      </Router>
      </div>
  );
}

export default App
