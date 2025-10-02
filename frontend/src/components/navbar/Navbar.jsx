import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <div className={styles.navbarContainer}>
            <nav className={styles.navbarInner}>
                <div className={styles.navbarElement}>HOME</div>
                <div className={styles.navbarElement}>PROFILE</div>
                <div className={styles.navbarElement}>EVENTS</div>
                <div className={styles.navbarElement}>TICKETS</div>
                <div className={styles.navbarElement}>CALENDAR</div>
            </nav>
            <footer className={styles.footerContainer}>
                <div>Copyright ©2025 Ozan Celikkol.</div>
                <div>All right reserved.</div>
            </footer>
        </div>
    );
}