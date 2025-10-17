import db from '../models/index.js';

const seedAgeLimit = async () => {
    try{
        console.log('AgeLimit seeding is starting...');

        const ageLimits = await db.AgeLimit.bulkCreate([
            {
                ageValue: 0,
            }, {
                ageValue: 16,
            }, {
                ageValue: 18,
            }, {
                ageValue: 21,
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`AGELIMIT TABLE: Added ${ageLimits.length} record.`)
    } catch(error) {
        console.error('Error occured on seeding AGELIMIT: ', error);
    };
}

seedAgeLimit();