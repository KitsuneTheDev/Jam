import express from 'express';
import path, { dirname } from 'path';
import url from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/index.js';
import { initializeServer } from './setup/server.setup.js';


// CREATING HTTP SERVER AND IMPORTING .ENV FILE
const app = express();
dotenv.config({path : '/.env'});
const PORT = process.env.PORT || 3000;

// const __filename = url.fileURLToPath(import.meta.url);
// console.log(__filename);
// const __dirname = path.dirname(__filename);
// console.log(__dirname);

// CORS SET UP
const corsOptions = {
    origin: 'http://localhost:51730',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

await initializeServer(app, PORT);

