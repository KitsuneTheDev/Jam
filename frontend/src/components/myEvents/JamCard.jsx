import dayjs from 'dayjs';
import styles from './JamCard.module.css';

export default function JamCard({ ticket }) {
    
    console.log(ticket);
    const eventDate = dayjs(ticket.Ticket.Event.eventDate).format('DD-MM-YYYY');
    const ticketActiveClass = ticket.isUsed ? null : styles.active;

    return(
        <div className={styles.jamCardOuter}>
            <div className={styles.jamCardHeader}>
                <div className={styles.headerDate}>{ eventDate }</div>
                <div className={styles.headerEvent}>{ ticket.Ticket.Event.eventName }</div>
                <div className={styles.headerLocation}>{ ticket.Ticket.Event.Location.locationName }</div>
            </div>
            <div className={styles.jamCardBody}>
                <div className={styles.gotToTicket}>Open Ticket</div>
                <div className={`${styles.isTicketActive} ${ticketActiveClass}`}>Active</div>
            </div>
        </div>
    );
}