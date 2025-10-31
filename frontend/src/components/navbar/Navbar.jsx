import styles from './Navbar.module.css';
import { Link } from 'react-router';

export default function Navbar() {

    const showMe = (event) => {
        console.log(event.target.classList);
    }

    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarHeader}>
                JAM
            </div>
            <nav className={styles.navbarInner}>
                <Link className={`${styles.navbarElement} ${styles.active} ${styles.flick}`} onClick={showMe}>HOME</Link>
                <Link className={styles.navbarElement}>PROFILE</Link>
                <Link className={styles.navbarElement}>MY-EVENTS</Link>
                <Link className={styles.navbarElement}>MY-TICKETS</Link>
                <Link className={styles.navbarElement}>CALENDAR</Link>
            </nav>
            <footer className={styles.footerContainer}>
                <div>Copyright ©2025 Ozan Celikkol.</div>
                <div>All right reserved.</div>
            </footer>
        </div>
    );
}