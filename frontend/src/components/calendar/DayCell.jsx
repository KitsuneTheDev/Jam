import styles from './DayCell.module.css';

export default function DayCell({ dayNumber, eventCount }) {

    return (
        <div className={styles.contentElement}>
            <div className={styles.elementOuter}>
                <div className={styles.elementInner}></div>
                <div className={styles.elementInner}></div>
                <div className={styles.elementInner}></div>
            </div>
        </div>
    );
}