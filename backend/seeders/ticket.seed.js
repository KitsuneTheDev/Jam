import db from '../models/index.js';

const seedTicket = async () => {

    console.log('Seeding Tickets is starting...');
    // INCLUDESID FOREIGN KEY SHOULD BE ADDED AFTER CREATING LOOKUP TABLE INCLUDES

    try {
        const tickets = await db.Ticket.bulkCreate([
            {
                type: 'Normal',
                ticketPrice: 50,
                ticketTotal: 110,
                ticketSold: 83,
                currencyId: 2,
                eventId: 1,
            }, {
                ticketType: 'Normal',
                ticketPrice: 10,
                ticketTotal: 50,
                ticketSold: 8,
                currencyId: 1,
                eventId: 2,
            }, {
                ticketType: 'Participant',
                ticketPrice: 20,
                ticketTotal: 100,
                ticketSold: 20,
                currencyId: 4,
                eventId: 3,
            }, {
                ticketType: 'Audience',
                ticketPrice: 50,
                ticketTotal: 150,
                ticketSold: 80,
                currencyId: 4,
                eventId: 3,
            }, {
                ticketPrice: 50,
                ticketTotal: 200,
                ticketSold: 80,
                currencyId: 3,
                eventId: 4,
            }
        ], {
            ignoreDuplicate: true,
        });
        console.log(`TICKETS TABLE: Added ${tickets.length} record.\n`);
    } catch(error) {
        console.error('Error on seeding TICKETS: ', error, '\n');
    }
}

export { seedTicket };