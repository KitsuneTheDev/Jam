import styles from './EventCard.module.css';

export default function EventCard({ event }) {

    const alcoholClass = event.alcohol ? styles.alcohol : styles.noalcohol;
    return(
        <div className={styles.eventCardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerDate}>{event.eventDate}</div>
                    <div className={styles.headerLocation}>{event.Location.city}</div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerAge}>{event.AgeLimit.ageValue}</div>
                    <div className={`${styles.headerAlcohol} ${alcoholClass}`}>Alcohol</div>
                    <div className={styles.headerDressCode}>{event.DressCode.dressCodeName}</div>
                </div>
            </div>
            <div className={styles.cardMain}>
                <div className={styles.mainName}>{event.eventName}</div>
            </div>
            <div className={styles.cardDetail}>
                <div className={styles.detailDesc}>{event.description}</div>
            </div>
        </div>
    );
}