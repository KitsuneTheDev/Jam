import dayjs from 'dayjs';
import styles from './JamCard.module.css';

export default function JamCard({ ticket }) {
    
    console.log(ticket);
    const eventDate = dayjs(ticket.Ticket.Event.eventDate).format('DD-MM-YYYY');

    return(
        <div className={styles.jamCardOuter}>
            <div className={styles.jamCardHeader}>
                <div className={styles.headerDate}>{ eventDate }</div>
                <div className={styles.headerEvent}>{ ticket.Ticket.Event.eventName }</div>
                <div className={styles.headerLocation}>{ ticket.Ticket.Event.Location.locationName }</div>
            </div>
            <div className={styles.jamCardBody}>
                
            </div>
        </div>
    );
}