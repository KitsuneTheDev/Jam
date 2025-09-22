import express from 'express';
import { getEvents, getSingleEvent } from '../controllers/eventsController.js';

const routerEvents = express.Router();

// GET ALL EVENTS
routerEvents.get('/', getEvents);

// GET SINGLE EVENT
routerEvents.get('/:id', getSingleEvent);

// POST EVENT
// routerEvents.post('/', addEvent);

// UPDATE EVENT
// routerEvents.put('/:id', updateEvent);

// DELETE EVEN
// routerEvents.delete('/:id', deleteEvent);

export default routerEvents;