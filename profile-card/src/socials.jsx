import {FaYoutube, FaInstagram, FaXTwitter} from "react-icons/fa6";


function Socials({youtube, instagram, x}) {
    return(
        <div className="socials">
            <a href={youtube} target="_blank"><FaYoutube className="icon"/></a>
            <a href={instagram} target="_blank"><FaInstagram className="icon"/></a>
            <a href={x} target="_blank"><FaXTwitter className="icon"/></a>
        </div>
    )

}

export default Socials;