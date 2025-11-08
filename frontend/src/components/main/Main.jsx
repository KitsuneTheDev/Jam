import styles from './Main.module.css'; 
import EventCard from './EventCard.jsx';
import { useEvents } from '../../contexts/Events.context.jsx';

export default function Main() {

    const { events, setEvents, isEventsLoading, eventsError } = useEvents();

    console.log(events);

    if(isEventsLoading) return(
        <div className={`${styles.mainContainer}`}>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingContent}>
                    Loading...
                </div>
            </div>
        </div>
    );

    return(
        <div className={`${styles.mainContainer} ${styles.slideIn}`}>
            <div className={styles.eventsContainer}>
                {events.map((event, index) => <EventCard key={index} event={event}/>)}
            </div>
        </div>
    );
}