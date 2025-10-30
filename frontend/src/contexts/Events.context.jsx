import { createContext, useContext, useEffect, useState } from "react";
import { useEventsData } from "../hooks/useEventsData.hook.js";

const EventContext = createContext();

export default function EventProvider({ children }) {

    const { events, isEventsLoading, eventsError, setEvents } = useEventsData();

    const values ={
        events,
        isEventsLoading,
        eventsError,
        setEvents,
    }

    return(
        <EventContext.Provider value={values}>
            {children}
        </EventContext.Provider>
    );
}

const useEvents = () => useContext(EventContext);

export { useEvents };