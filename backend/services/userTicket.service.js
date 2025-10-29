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
}

export default UserTicketService;