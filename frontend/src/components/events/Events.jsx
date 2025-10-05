import styles from './Events.module.css';
import { users } from '../../data/users.js';
import { events } from '../../data/events.js';

export default function Events() {

    const demoUser = users[0];
    console.log(demoUser);
    const demoEvent = events.find(event => demoUser.purchasedTickets[0].eventId === event.id);
    console.log(demoEvent);
    
    return(
        <div className={styles.eventsContainer}>
            <div className={styles.eventsHeader}>
                <div className={styles.headerLeft}>{demoEvent.date}</div>
                <div className={styles.headerRight}>{demoEvent.location}</div>
            </div>
            <div className={styles.eventsBody}>
                <div className={styles.eventName}>{demoEvent.name}</div>
            </div>
            <div className={styles.eventsDetails}>
                <div className={styles.eventsDetail}>{demoEvent.ageLimit}</div>
                <div className={styles.eventsDetail}>{demoEvent.alcohol}</div>
                <div className={styles.eventsDetail}>{demoEvent.dressCode}</div>
            </div>
        </div>
    );
}