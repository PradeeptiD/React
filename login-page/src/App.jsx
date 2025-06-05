import './index.css';
import Header from "./components/header"
import Login from "./components/login"
import Footer from "./components/footer"
import "./App.css"

function App() {
  return (
    <div>
      <Header/>
      <div className='login-component-container'>
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
