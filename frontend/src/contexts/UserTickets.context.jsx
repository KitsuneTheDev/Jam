import { createContext, useContext } from "react";
import { useUserTicketsData } from "../hooks/useUserTicketsData.hook.js";

const UserTicketsContext = createContext();

export default function UserTicketProvider({ children }) {

    const { isUserTicketsLoading, userTicketsError, userTickets } = useUserTicketsData();

    const values = {
        isUserTicketsLoading,
        userTicketsError,
        userTickets,
    }

    return(
        <UserTicketsContext.Provider value={ values }>
            { children }
        </UserTicketsContext.Provider>
    );
}

export const useUserTickets = () => useContext(UserTicketsContext); 