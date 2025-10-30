import db from '../models/index.js';
import { Op } from 'sequelize';

class UserTicketService {
    /*
        @returns {Promise<Array<Events>>}
    */

    static async getUserTickets(activeUserId) {
        const userTickets = await db.UserTicket.findAll({
            where: {
                userId: activeUserId,
            },
            include: [
                {
                    model: db.Ticket,
                    as: 'Ticket',
                    include: {
                        model: db.Event,
                        as: 'Event',
                        include: [{
                            model: db.Location,
                            as: 'Location'
                        }, {
                            model: db.AgeLimit,
                            as: 'AgeLimit',
                        }, {
                            model: db.DressCode,
                            as: 'DressCode'
                        }]
                    }
                }
            ],
            order: [[{model: db.Ticket, as:'ticket'}, {model: db.Event, as: 'Event'}, 'eventDate', 'ASC']],
        });
        return userTickets;
    }
}

export default UserTicketService;