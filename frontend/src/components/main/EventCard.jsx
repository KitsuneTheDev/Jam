import styles from './EventCard.module.css';

export default function EventCard({ event }) {
    return(
        <div className={styles.eventCardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerDate}>{event.date}</div>
                    <div className={styles.headerLocation}>{event.location}</div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerAge}>{event.ageLimit ? event.ageLimit : ''}</div>
                    <div className={styles.headerAlcohol}>{`${event.alcohol}`}</div>
                    <div className={styles.headerDressCode}>{event.dressCode}</div>
                </div>
            </div>
            <div className={styles.cardMain}>
                <div className={styles.mainName}>{event.name}</div>
            </div>
            <div className={styles.cardDetail}>
                <div className={styles.detailDesc}>{event.description}</div>
            </div>
        </div>
    );
}