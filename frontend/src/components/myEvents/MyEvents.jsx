import styles from './MyEvents.module.css';
import JamCard from './JamCard.jsx';
import { useUserTickets } from '../../contexts/UserTickets.context.jsx';

export default function MyEvents() {

    const { isUserTicketsLoaidng, userTickets, userTicketsError } = useUserTickets();

    if(isUserTicketsLoaidng) {
        return (
            <div>Loading...</div>
        );
    }

    return(
        <div className={styles.myEventsContainer}>
            <div className={styles.myEventHeader}>
                <h1>My Jams</h1>
            </div>
            <div className={styles.myEventBody}>
                { userTickets.map((ticket, index) => {
                    return <JamCard key={ index } ticket={ ticket } />
                }) }
            </div>
        </div>
    );
}