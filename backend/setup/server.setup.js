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

    try {
        // GOOD MORNING TO DB
        await db.sequelize.authenticate();
        console.log('Database connection is successful');

        await db.sequelize.sync({ alter:true });
        console.log('Database tables successfully synchronized');

        // await idSetup();

        // ALL EARS
        server = app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

        // DID YOU JUST...
        process.on('SIGINT', closeServer);
        process.on('SIGTERM', closeServer);

    } catch(error) {
        console.error('DB or Server run error: ', error.message);
        // UM OKAY, BYE
        if(server) server.close(() => process.exit(1));
        else process.exit(1);
    }
};

export { initializeServer };