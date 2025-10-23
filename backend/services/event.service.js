import db from '../models/index.js';

class EventService {
    /*
        @returns {Promise<Array<Event>>} 
    */

    static async getAllEventsWithTickets() {
        const events = await db.Event.findAll({
            include: [{
                model: db.Ticket,
                as: 'Tickets',
                attributes: ['ticketId', 'ticketType', 'ticketPrice', 'ticketTotal', 'ticketSold'],
            }, {
                model: db.Location,
                as: 'Location',
                attributes: ['locationId', 'locationName', 'address', 'city', 'country'],
            }, {
                model: db.AgeLimit,
                as: 'AgeLimit',
                attributes: ['ageLimitId', 'ageValue'],
            }, {
                model: db.DressCode,
                as: 'DressCode',
                attributes: ['dressCodeId', 'dressCodeName'],
            }],
            order: [
                ['eventDate', 'ASC'],
                ['Tickets', 'ticketPrice', 'ASC']
            ],
        });

        return events;
    }
}

export default EventService;