import { getEvents } from "../api/events.api.js";
import ApiClient from "../utils/ApiClient.util.js";
import { useEffect, useState } from "react";

export function useEventsData() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const loadEvents = async () => {
            try{
                const data = await getEvents();
                setEvents(data);
                setError(null);
            } catch(error) {
                consoler.error(error);
                setError('An error occured while loading events.');
            } finally {
                setIsLoading(false);
            }
        }

        loadEvents();
    }, []);

    return { events, isLoading, error, setEvents };
};
