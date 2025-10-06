import styles from './Main.module.css';
import { events } from '../../data/events.js';
import EventCard from './EventCard.jsx';

export default function Main() {

    return(
        <div className={styles.mainContainer}>
            <div className={styles.eventsContainer}>
                {events.map((event) => <EventCard key={event.eventId} event={event}/>)}
            </div>
        </div>
    );
}