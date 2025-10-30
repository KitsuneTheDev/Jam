import styles from './Events.module.css';
import { useUserTickets } from '../../contexts/UserTickets.context.jsx';
import dayjs from 'dayjs';

export default function Events() {
    
    const { userTickets, isUserTicketsLoading, userTicketsError } = useUserTickets();
    console.log(userTickets);
    const upComingEvent = userTickets[0];

    if(isUserTicketsLoading || !upComingEvent) return(
        <div>Loading...</div>
    );

    return(
        <div className={styles.eventsContainer}>
            <div className={styles.eventsInner}>
                <div className={styles.eventsHeader}>
                    <div className={styles.headerLeft}>{dayjs(upComingEvent.Ticket.Event.eventDate).format('ddd-MM-YYYY')}</div>
                    <div className={styles.headerRight}>{upComingEvent.Ticket.Event.Location.locationName}</div>
                </div>
                <div className={styles.eventsBody}>
                    <div className={styles.eventName}>{upComingEvent.Ticket.Event.eventName}</div>
                </div>
                <div className={styles.eventsDetails}>
                    <div className={styles.eventsDetail}>{upComingEvent.Ticket.Event.AgeLimit.ageValue}</div>
                    <div className={styles.eventsDetail}>{upComingEvent.Ticket.Event.alcohol ? `Alcohol` : `No Alcohol`}</div>
                    <div className={styles.eventsDetail}>{upComingEvent.Ticket.Event.DressCode.dressCodeName}</div>
                </div>
            </div>
        </div>
    );
}