import db from "../models/index.js"

const idSetup = async () => {
    try {
        await db.sequelize.query('ALTER SEQUELIZE "LOCATIONS_locationId_seq INCREMENT BY 5 RESTART WITH 1');
    } catch(error) {
        console.error('ID SETUP ERROR: ', error);
    }
}

export { idSetup };