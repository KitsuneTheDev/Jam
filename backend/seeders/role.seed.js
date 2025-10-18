import db from '../models/index.js';

const seedRole = async () => {
    console.log('Seeding Roles is starting...');
    try {
        const roles = await db.Role.bulkCreate([
            {
               roleName: 'user', 
            }, {
                roleName: 'admin',
            }, {
                roleName: 'kitsu',
            },
        ], {
            ignoreDuplicate: true,
        });

        console.log(`ROLES TABLE: Added ${roles.length} record.\n`);
    } catch(error) {
        console.error('Error occured on seeding ROLES: ', 'error', '\n');
    }
}

export { seedRole };