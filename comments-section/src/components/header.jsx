import { FaUser } from "react-icons/fa";
import { FaBars } from 'react-icons/fa'

// import "./header.css"
import logoImg from "../assets/arbyte-blogs.png"
import "./header.css"
// import { FaSearch } from "react-icons/fa"

function Header() {
    return(
        <div className="header-container">
            <img className="logo" src={logoImg} alt="Logo" />
            <div className="navigation">
                <nav>
                    <a href="">Home</a>
                    <a href="">Blog</a>
                    <a href="">About Us</a>
                </nav>
                <div className="search-bar">
                    <input className="header-input" type="text" placeholder="Search here"/>
                    {/* <FaSearch className="search-image"/> */}
                    {/* <img className="search-image" src="" alt="Search" /> */}
                </div>
            </div>
            <div className="buttons">
                {/* <button className="login">Log In</button>
                <button className="signup">Sign Up</button> */}
                <button className="login"><FaUser /></button>
            </div>
            <button className="hamburger">
                <FaBars size={24} />
            </button>
        </div>
    );
}

export default Header;