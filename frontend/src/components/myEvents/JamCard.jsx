import styles from './JamCard.module.css';

export default function JamCard({ ticket }) {
    
    console.log(ticket);

    return(
        <div className={styles.jamCardOuter}>
            { ticket.Ticket.Event.eventName }
        </div>
    );
}