import styles from './MyEvents.module.css';
import JamCard from './JamCard.jsx';
import { useUserTickets } from '../../contexts/UserTickets.context.jsx';

export default function MyEvents() {

    const { isUserTicketsLoading, userTickets, userTicketsError } = useUserTickets();

    if(isUserTicketsLoading) { return(
        <div className={`${styles.myEventsContainer}`}>
            <div className={styles.myEventLoading}>
                <h1>Loading...</h1>
            </div>
        </div>);
    }

    return(
        <div className={`${styles.myEventsContainer} ${styles.slideIn}`}>
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