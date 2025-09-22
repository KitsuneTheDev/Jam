import express from 'express';
import path, { dirname } from 'path';
import url from 'url';
import dotenv from 'dotenv';
import routerEvents from './routes/routeEvents.js';

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api/events', routerEvents);

app.listen(PORT, () => console.log('Server is running.', PORT));