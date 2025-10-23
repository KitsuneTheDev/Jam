import EventService from "../services/event.service.js";

const listAllEvents = async (req, res) => {
    try {
        const events = await EventService.getAllEventsWithTickets();

        return res.status(200).json({
            status: 'success',
            data: events,
            count: events.length
        });

    } catch(error) {
        console.error('Listing events error: ', error);

        return res.status(500).json({
            status: 'error',
            message: 'An error occured while listing events.',
            error: error.message,
        });
    }
};

export { listAllEvents };