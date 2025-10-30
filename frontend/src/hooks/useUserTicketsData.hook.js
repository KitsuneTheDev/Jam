import { getUserTickets } from "../api/userTickets.api.js";
import { useState, useEffect } from 'react';

export function useUserTicketsData() {
    const [isUserTicketsLoading, setIsUserTicketsLoading] = useState(false);
    const [userTicketsError, setUserTicketsError] = useState(null);
    const [userTickets, setUserTickets] = useState([]);

    useEffect(() => {
        const fetchUserTickets = async () => {
            setIsUserTicketsLoading(true);
            try{
                const userTickets = await getUserTickets();
                setUserTickets(() => userTickets);
                setUserTicketsError(null);
            } catch(error) {
                consoler.error(error);
                setUserTicketsError('An error occured while loading user tickets.');
            } finally {
                setIsUserTicketsLoading(false);
            }
        }

        fetchUserTickets();
    }, [])

    return { isUserTicketsLoading, userTicketsError, userTickets };
}

// ADD CACHE MECHANISM HERE AND ALL OTHERS