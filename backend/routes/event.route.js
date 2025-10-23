import express from 'express';
import { listAllEvents } from '../controllers/event.controller.js';

const router = express.Router();

router.get('/', listAllEvents);

export default router;