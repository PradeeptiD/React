//done
import "./header.css";
import logoImg from "../assets/arbyte-blogs.png";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

const navItemsByRole = {
    guest: [
        { label: "Home", path: "/" },
        { label: "Blog", path: "/posts" },
        { label: "About Us", path: "/about" }, // optional static
    ],
    user: [
        { label: "Home", path: "/" },
        { label: "Blog", path: "/posts" },
        { label: "My Comments", path: "/comments" },
    ],
    admin: [
        { label: "Home", path: "/" },
        { label: "Blog", path: "/posts" },
        { label: "User Management", path: "/admin/users" },
    ],
    };

    function Header() {
    const { user, login, logout } = useAuth();
    const role = user?.role || "guest";
    const navItems = navItemsByRole[role];

    return (
        <div className="header-container">
        <img className="logo" src={logoImg} alt="Logo" />

        <div className="navigation">
            <nav>
            {navItems.map((item) => (
                <Link key={item.label} to={item.path}>
                {item.label}
                </Link>
            ))}
            </nav>

            <div className="search-bar">
            <input type="text" placeholder="Search..." />
            {/* <FaSearch className="search-image" /> */}
            </div>
        </div>

        <div className="buttons">
            {role === "guest" ? (
            <>
                <button className="login" onClick={() => login("user")}>Login as User</button>
                <button className="signup" onClick={() => login("admin")}>Login as Admin</button>
            </>
            ) : (
            <button className="logout" onClick={logout}>Logout</button>
            )}
        </div>

        <button className="hamburger">
            <FaBars size={24} />
        </button>
        </div>
    );
}

export default Header;
