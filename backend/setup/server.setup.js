import db from '../models/index.js';
import { idSetup } from './dbId.setup.js';

/*
    * Prepare database
    * ID sequence settings
    * Start HTTP server
    * Listens clean closing signals
    * @param {express.Application}
    * @param {number}
    * returns {Promise<void>}
*/

const initializeServer = async (app, PORT) => {
    let server;

    const connectDB = async () => {
        try {
            await db.sequelize.authenticate();
            console.log('Connected to Database.');
        } catch(error) {
            console.error('Database connection errorS: ', error);
        }
    };

    const createTables = async () => {
        try {
            await db.sequelize.drop();
            await db.sequelize.sync();
            console.log('Tables created successfully.');
        } catch(error) {
            console.error('Error while creating tables: ', error);
        }
    };

        
    const closeServer = async () => {
        console.log('Server is closing...');

        server.close(async () => {
            console.log('HTTP server is closed');

            try {
                await db.sequelize.close();
                process.exit(0);
            } catch(error) {
                console.error('DB disconnection error: ', error);
                process.exit(1);
            }
        });
    };
    // GOOD MORNING TO DB
    await connectDB();

    await createTables();

    // await idSetup();
    try {
        // ALL EARS
        server = app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

        // DID YOU JUST...
        process.on('SIGINT', closeServer);
        process.on('SIGTERM', closeServer);

    } catch(error) {
        console.error('Server run error: ', error.message);
        // UM OKAY, BYE
        if(server) server.close(() => process.exit(1));
        else process.exit(1);
    }
};

export { initializeServer };