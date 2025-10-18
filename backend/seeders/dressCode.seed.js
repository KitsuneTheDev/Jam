import db from '../models/index.js';

const seedDressCode = async () => {
    console.log('DressCode seeding is starting...');

    try {
        const dressCodes = await db.DressCode.bulkCreate([
            {
                dressCodeName: 'Casual',
            }, {
                dressCodeName: 'Semi Formal',
            }, {
                dressCodeName: 'Formal',
            }, {
                dressCodeName: 'Costume',
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`DRESSCODE TABLE: Added ${dressCodes.length} record\n`);
    } catch(error) {
        console.error('Error occured on seeding DRESSCODE: ', error, '\n');
    }
}

export { seedDressCode };