import styles from "./SocialLink.module.css"

export default function SocialLink ({name, url}) {
    return <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">{name}</a>;
    

}