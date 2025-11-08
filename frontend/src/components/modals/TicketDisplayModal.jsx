import styles from './TicketDisplayModal.module.css';
import { useTicketDisplayModal } from '../../contexts/TicketDisplayModalContext.jsx';

export default function TicketDisplayModal() {

    const { ticketDisplayModalActive, toggleTicketDisplayModal } = useTicketDisplayModal();

    return(
        <div className={styles.ticketDisplayModalContainer} data-active={ticketDisplayModalActive}>
            <h1>Ticket Display Demo</h1>
        </div>
    );
}