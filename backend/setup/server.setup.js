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

    try {
        await db.sequelize.authenticate();
        console.log('Database connection is successful');

        await db.sequelize.sync({ alter:true });
        console.log('Database tables successfully synchronized');

        // await idSetup();

        server = app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
        
        const closeServer = async () => {
            console.log('Server is closing...');

            server.close(async () => {
                console.log('HTTP server is closed');

                try {
                    await db.sequelize.close();
                } catch(error) {
                    console.error('DB disconnection error: ', error);
                }

                process.exit(0);
            });
        }

        process.on('SIGINT', closeServer);
        process.on('SIGTERM', closeServer);

    } catch(error) {
        console.error('DB or Server run error: ', error.message);

        if(server) server.close(() => process.exit(1));
        else process.exit(1);
    }
};

export { initializeServer };