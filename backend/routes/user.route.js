import express from 'express';
import { listUserTickets } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/tickets', listUserTickets);

export default router;