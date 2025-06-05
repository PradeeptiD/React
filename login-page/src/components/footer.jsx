import logoImg from "../assets/arbyte-blogs.png"
import "./footer.css"

function Footer() {
    return(
        <div className="footer-container">
            <div className="company">
                <img className="logo" src={logoImg} alt="Logo" />
                    <p className="company-description">Let's get started on something great</p>
            </div>
            <div className="footer-buttons">
                <button className="footer-button">Chat to us</button>
                <button className="footer-button">Get Started</button>
            </div>
            {/* <div className="contact-us">
                <h3>Contact Us</h3>
                <p>abc@gmail.com</p>
                <p>+977-9800000000</p>
                <div className="socials">
                    <img src="" alt="Facebook" />
                    <img src="" alt="Instagram" />
                    <img src="" alt="Tiktok" />
                </div>
            </div> */}
        </div>
    )
}

export default Footer;