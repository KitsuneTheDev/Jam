import styles from './Layout.module.css';

export default function Layout({ children }) {
    return(
        <div className={styles.layoutContainer}>
            <div className={styles.layoutGrid}>
                { children }
            </div>
        </div>
    );;
}