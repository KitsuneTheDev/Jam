import db from '../models/index.js';
import { Op } from 'sequelize';

class UserTicketService {
    /*
        @returns {Promise<Array<Events>>}
    */

    static async getUpcomingTicket() {
        const userTickets = await db.UserTicket.findAll({
            where: {
                userId: 3,
            },
            include: [{
                model: db.Ticket,
                as: 'Ticket',
                include: {
                    model: db.Event,
                    as: 'Event',
                }
            }
            ]
        });

        console.log(userTickets);

        return userTickets;
    }
}

export default UserTicketService;