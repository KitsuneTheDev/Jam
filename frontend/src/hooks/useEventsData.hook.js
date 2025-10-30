import { getEvents } from "../api/events.api.js";
import { useEffect, useState } from "react";

export function useEventsData() {
    const [events, setEvents] = useState([]);
    const [isEventsLoading, setIsEventsLoading] = useState(false);
    const [eventsError, setEventsError] = useState(null);

    useEffect(() => {
        setIsEventsLoading(true);
        const loadEvents = async () => {
            try{
                const data = await getEvents();
                setEvents(data);
                setEventsError(null);
            } catch(error) {
                consoler.error(error);
                setEventsError('An error occured while loading events.');
            } finally {
                setIsEventsLoading(false);
            }
        }

        loadEvents();
    }, []);

    return { events, isEventsLoading, eventsError, setEvents };
};
