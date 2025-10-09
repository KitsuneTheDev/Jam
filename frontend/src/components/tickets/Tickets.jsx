import styles from './Tickets.module.css';
import { userTickets } from '../../data/userTickets';

export default function Tickets() {

    const demoTicket = userTickets[0];

    return(
        <div className={styles.ticketsContainer}>
            <div className={styles.ticketsInner}>
                <div className={styles.ticketContent}>
                    <div className={styles.contentBody}>
                        <div className={styles.firstContent}>KEEP</div>
                        <div className={styles.secondContent}>THIS</div>
                        <div className={styles.thirdContent}>COUPON</div>
                    </div>
                    <div className={styles.contentHeader}>{demoTicket.userTicketId}</div>
                </div>
            </div>
            <div className={styles.ticketCornerHole}></div>
            <div className={styles.ticketCornerHole}></div>
            <div className={styles.ticketCornerHole}></div>
            <div className={styles.ticketCornerHole}></div>
        </div>
    );
}