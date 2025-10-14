import express from 'express';
import path, { dirname } from 'path';
import url from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/index.js';


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

const startServer = async () => {
    let server;

    try {
        await db.sequelize.authenticate();
        console.log('Database connection is successful');

        await db.sequelize.sync({ alter: true });
        console.log('Database tables successfully synchronized');

        server = app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

        const closeServer = async () => {
            console.log('HTTP server is closed.');

            server.close(async () => {
                console.log('HTTP server is closed.');

                try {
                    await db.sequelize.close();
                    console.log('DB is disconnected.');
                } catch(error) {
                    console.error('DB disconnection error: ', error);
                }

                process.exit(0);
            });
            
            process.on('SIGINT', closeServer);
            process.on('SIGTERM', closeServer);
        }
    } catch(error) {
        console.error('DB or Server run error: ', error.message);
        if(server) server.close(() => process.exit(1));
        else process.exit(1);
    }
};

startServer();