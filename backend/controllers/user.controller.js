import UserTicketService from '../services/userTicket.service.js';

const listUserTickets = async(req, res) => {
    try {
        const userTickets = await UserTicketService.getUserTickets(3);

        return res.status(200).json({
            status: 'success',
            data: userTickets,
            count: userTickets.length,
        });

    } catch(error) {
        console.error('Listing user tickets error: ', error);

        return res.status(500).json({
            status: 'error',
            message: 'An error occured while listing user tickets',
            error: error.message,
        });
    }
}

export { listUserTickets };