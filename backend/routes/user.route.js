import express from 'express';
import { listUserTickets, listUserEvents } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/tickets', listUserTickets);
router.get('/events', listUserEvents);

export default router;