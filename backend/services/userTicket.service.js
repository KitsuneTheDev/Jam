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
        });
        return userTickets;
    }

    static async getUserEvents(activeUserId) {
        const userEvents = await db.Event.findAll({
            include: [{
                model: db.UserTicket,
                as: 'UserTicket',
                required: true,

                where: {
                    userId: activeUserId,
                    isUsed: {
                        [Op.is]: false,
                    }
                }
            }],
            where: {
                eventDate: {
                    [Op.gt]: new Date(),
                }
            },

            oreder: [['eventDate', 'ASC']],
            distinct: true,
        });

        return userEvents;
    }
}

export default UserTicketService;