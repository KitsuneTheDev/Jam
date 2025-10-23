import { createContext, useContext, useEffect, useState } from "react";
import { useEventsData } from "../hooks/useEventsData.hook.js";

const EventContext = createContext();

export default function EventProvider({ children }) {

    const { events, isLoading, error, setEvents } = useEventsData();

    const values ={
        events,
        isLoading,
        error,
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