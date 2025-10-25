import db from '../models/index.js';

const seedEvent = async () => {
    console.log('Seeding events is starting...');
    try{
        const events = await db.Event.bulkCreate([
            {
                eventName: 'Roof Party',
                description: 'Chill rooftop sunset party with relaxing music.',
                eventDate: '2025-11-3',
                isAlcohol: true,
                ageLimitId: 3,
                locationId: 1,
                dressCodeId: 1,
            }, {
                eventName: `Let's speak Japanese`,
                description: 'A speaking event for proactising Japanese for all levels.',
                eventDate: '2025-11-01',
                isAlcohol: false,
                dressCodeId: 1,
                locationId: 2,
                ageLimitId: 1,
            }, {
                eventName: 'Dancing through Night',
                description: 'Ballroom dance event.',
                eventDate: '2026-02-1',
                isAlcohol: true,
                dressCodeId: 3,
                locationId: 2,
                ageLimitId: 3,
            }, {
                eventName: 'Dreams Land',
                description: 'Costume Party',
                eventDate: '2026-03-15',
                isAlcohol: true,
                dressCodeId: 4,
                locationId: 3,
                ageLimitId: 4,
            }
        ], {
            ignoreDuplicate: true,
        });
        console.log(`EVENTS TABLE: Added ${events.length} record.\n`);
    } catch(error) {
        console.error('Error occured on seeding EVENTS: ', error, '\n');
    }
}

export { seedEvent };