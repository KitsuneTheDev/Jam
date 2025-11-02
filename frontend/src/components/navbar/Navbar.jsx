import styles from './Navbar.module.css';
import { NavLink } from 'react-router';

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
                <NavLink to='/' className={({ isActive }) => `${styles.navbarElement} ${isActive && styles.active} ${isActive && styles.flick}`} onClick={showMe}>HOME</NavLink>
                <NavLink to='/profile' className={({ isActive }) => `${styles.navbarElement} ${isActive && styles.active} ${isActive && styles.flick}`}>PROFILE</NavLink>
                <NavLink to='/myevents' className={({ isActive }) => `${styles.navbarElement} ${isActive && styles.active} ${isActive && styles.flick}`}>MY-EVENTS</NavLink>
                <NavLink to='/mytickets' className={({ isActive }) => `${styles.navbarElement} ${isActive && styles.active} ${isActive && styles.flick}`}>MY-TICKETS</NavLink>
                <NavLink to='/calendar' className={({ isActive }) => `${styles.navbarElement} ${isActive && styles.active} ${isActive && styles.flick}`}>CALENDAR</NavLink>
            </nav>
            <footer className={styles.footerContainer}>
                <div>Copyright ©2025 Ozan Celikkol.</div>
                <div>All right reserved.</div>
            </footer>
        </div>
    );
}