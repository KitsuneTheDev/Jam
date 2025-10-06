import styles from './Events.module.css';
import { users } from '../../data/users.js';
import { events } from '../../data/events.js';
import { userTickets } from '../../data/userTickets.js';
import { tickets } from '../../data/tickets.js';
import { locations } from '../../data/locations.lookup.js';
import { ageLimit } from '../../data/ageLimit.lookup.js';
import { dressCode } from '../../data/dressCode.lookup.js';

export default function Events() {

    const demoUser = users[0];
    console.log(demoUser);
    const demoEvent = events.find(event => {
        const demoUserTicket = userTickets.filter(userTicket => userTicket.userId === demoUser.userId);
        console.log('DEMO USER TICKET --> ', demoUserTicket);
        const demoTicket = tickets.filter(ticket => ticket.ticketId === demoUserTicket[0].ticketId);
        console.log('DEMO TICKET --> ', demoTicket);
        return event.id === demoTicket.eventId;
    });
    const demoLocation = locations.find(location => location.locationId === demoEvent.locationId);
    const demoAgeLimit = ageLimit.find(limit => limit.ageLimitId === demoEvent.ageLimitId);
    const demoDressCode = dressCode.find(code => code.dressCodeId === demoEvent.dressCodeId);
    console.log(demoEvent);
    
    return(
        <div className={styles.eventsContainer}>
            <div className={styles.eventsHeader}>
                <div className={styles.headerLeft}>{demoEvent.eventDate}</div>
                <div className={styles.headerRight}>{demoLocation.locationName}</div>
            </div>
            <div className={styles.eventsBody}>
                <div className={styles.eventName}>{demoEvent.eventName}</div>
            </div>
            <div className={styles.eventsDetails}>
                <div className={styles.eventsDetail}>{demoAgeLimit.ageValue}</div>
                <div className={styles.eventsDetail}>{demoEvent.alcohol ? `Alcohol` : `No Alcohol`}</div>
                <div className={styles.eventsDetail}>{demoDressCode.dressCodeName}</div>
            </div>
        </div>
    );
}