import db from '../models/index.js';

const seedUserTicket = async () => {
    
    console.log('Seeding userTickets is starting...');
    try {
        const userTickets = await db.UserTicket.bulkCreate([
            {
                isUsed: false,
                purchaseDate: '2025-6-10',
                qrHash: 'DEMO HASH 1',
                userId: 1,
                ticketId: 1,
            }, {
                isUsed: false,
                purchaseDate: '2025-10-2',
                qrHash: 'DEMO HASH 2',
                userId: 3,
                ticketId: 1,
            }, {
                isUsed: true,
                usedAt: '2025-10-16',
                purchaseDate: '2025-10-12',
                qrHash: 'DEMO HASH 3',
                userId: 3,
                ticketId: 4,
            }, {
                isUsed: false,
                purchaseDate: '2025-10-25',
                qrHash: 'DEMO HASH +',
                userId: 3,
                ticketId: 5
            }
        ], {
            ignoreDuplicate: true,
        });

        console.log(`USERTICKETS TABLE: Added ${userTickets.length} record.\n`);
    } catch(error) {
        console.error('Error occured on seeding USERTICKETS: ', error, '\n');
    }
}

export { seedUserTicket };