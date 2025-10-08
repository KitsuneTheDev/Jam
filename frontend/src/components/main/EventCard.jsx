import styles from './EventCard.module.css';
import { locations } from '../../data/locations.lookup.js';
import { ageLimit } from '../../data/ageLimit.lookup.js';
import { dressCode } from '../../data/dressCode.lookup.js';

export default function EventCard({ event }) {

    const theDress = dressCode.find(dress => dress.dressCodeId === event.dressCodeId);
    const theAge = ageLimit.find(age => age.ageLimitId === event.ageLimitId);
    const theLocation = locations.find(location => location.locationId === event.locationId);
    console.log(event);

    const alcoholClass = event.alcohol ? styles.alcohol : styles.noalcohol;
    return(
        <div className={styles.eventCardContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerDate}>{event.eventDate}</div>
                    <div className={styles.headerLocation}>{theLocation.city}</div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerAge}>{theAge.ageValue}</div>
                    <div className={`${styles.headerAlcohol} ${alcoholClass}`}>Alcohol</div>
                    <div className={styles.headerDressCode}>{theDress.dressCodeName}</div>
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