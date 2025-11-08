import { createContext, useContext, useState } from "react";

const TicketDisplayModalContext = createContext();

export default function TicketDisplayModalProvider({ children }) {

    const [ ticketDisplayModalActive, setTicketDisplayModalActive ] = useState(false);

    const toggleTicketDisplayModal = () => {
        setTicketDisplayModalActive(prev => !prev);
    };

    const values = {
        ticketDisplayModalActive,
        toggleTicketDisplayModal,
    }

    return(
        <TicketDisplayModalContext.Provider value={values}>
            { children }
        </TicketDisplayModalContext.Provider>
    );
}

const useTicketDisplayModal = () => useContext(TicketDisplayModalContext);

export { useTicketDisplayModal };