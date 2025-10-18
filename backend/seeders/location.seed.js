import db from '../models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const seedLocation = async () => {
    try {
        console.log('Location seeding is starting...');

        const locations = await db.Location.bulkCreate([
            {
                locationName: 'Völksbühne Berlin',
                adress: 'Rosa-Luxemburg-Platz',
                city: 'Berlin',
                country: 'Germany',
            }, 
            {
                locationName: 'Zorlu PSM',
                adress: 'Koru Sok. No:2',
                city: 'Istanbul',
                country: 'Turkey',                
            },
            {
                locationName: 'Madison Square Garden',
                adress: '4 Pennsylvania Plaza',
                city: 'New York',
                country: 'USA',
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`LOCATIONS TABLE: Added ${locations.length} record.\n`);
    } catch(error) {
        console.error('Error occured on seeding LOCATIONS: ', error, '\n');
    }
}

export { seedLocation };