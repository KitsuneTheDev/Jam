import styles from './Navbar.module.css';

export default function Navbar() {

    const activeClass = styles.active;

    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarHeader}>
                JAM
            </div>
            <nav className={styles.navbarInner}>
                <div className={`${styles.navbarElement} ${activeClass}`}>HOME</div>
                <div className={styles.navbarElement}>PROFILE</div>
                <div className={styles.navbarElement}>MY-EVENTS</div>
                <div className={styles.navbarElement}>MY-TICKETS</div>
                <div className={styles.navbarElement}>CALENDAR</div>
            </nav>
            <footer className={styles.footerContainer}>
                <div>Copyright ©2025 Ozan Celikkol.</div>
                <div>All right reserved.</div>
            </footer>
        </div>
    );
}