import { events } from '../data/events.js';

// @desc GET all events
// @route GET /api/events
export const getEvents = (req, res, next) => {
    const limit = Number.parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(events.slice(0, limit));
    }

    res.status(200).json(events);
}

export const getSingleEvent = (req, res, next) => {

    const idFromQuery = req.params.id;
    const eventById = events.find(event => event.id === idFromQuery);
    console.log('getSingleEvent idFromQuery ---> ', idFromQuery);

    if(!eventById) {
        // error here
        return;
    }

    res.status(200).json(eventById);
}

// export const addEvent = (req, res, next) => {

// }