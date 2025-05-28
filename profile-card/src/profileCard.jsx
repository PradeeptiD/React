import Taylor from "./assets/TS.jpg"
import "./profileCard.css"
import Socials from "./socials"

export default function ProfileCard({user}) {
    
    const { name, profession, description, youtube, instagram, x } = user
    
    return (
        <div className="profile-card">
            <div className="background"></div>
            <img src={Taylor} alt="Profile picture" />
            <div className="textBox">
                <h2>{name}</h2>
                <h4>{profession}</h4>
                <p class="line"></p>
                <p>{description}</p>
                <Socials youtube={youtube} instagram={instagram} x={x} />
            </div>
        </div>
    )
}