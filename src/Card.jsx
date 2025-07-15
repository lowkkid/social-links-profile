import SocialLink from "./SocialLink"
import styles from "./Card.module.css"

export default function Card() {
    return <div className={styles.card}>
        <img className={styles.avatar} src="me.jpg" alt="Me"/>
        
        <h1>Vladislav Shikunov</h1>
        <h2>Minsk, Belarus</h2>
        <p>Full-stack developer</p>
        <div className={styles.linksContainer}>
            <SocialLink url = "https://github.com/lowkkid" name = "GitHub"/>
            <SocialLink url = "https://www.frontendmentor.io/profile/lowkkid" name="Frontend Mentor"/>
            <SocialLink url= "https://www.linkedin.com/in/vladislav-shikunov-101b56358/" name="Linkedin" />
        </div>
    </div>
}