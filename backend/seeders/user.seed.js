import db from '../models/index.js';

const seedUser = async () => {
    
    console.log('Seeding User is starting...');

    try {
        const users = await db.User.bulkCreate([
            {
                userName: 'Ozan Celikkol',
                email: 'celikkolozan@gmail.com',
                roleId: 3,
            }, {
                userName: 'Test Admin',
                email: 'kitsunethedeveloper@gmail.com',
                roleId: 2,
            }, {
                userName: 'Test User',
                email: 'ozeebuzee@gmail.com',
                roleId: 1,
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`USERS TABLE: Added ${users.length} record.\n`);
    } catch(error) {
        console.error('Error occured on seeding USERS: ', error, '\n');
    }
}

export { seedUser };