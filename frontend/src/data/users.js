/*
{  
  userTicketId,
  userId,
  eventId,
  ticketId,
  purchaseDate, -- the time when the ticket is purchased
  isUsed -- default false
  usedAt -- the time when the ticket is used
}
*/

export const users = [
  {
    id: 1,
    username: 'Kitsu',
    email: 'kitsunethedeveloper@gmail.com',
    birthDate: '14-05-1994',
    name: 'Ozan',
    surname: 'Celikkol',
    role: 'admin',
    purchasedTickets: [
      {
        userTicketId: '1_event_01_event_01_ticket_01',
        userId: 1,
        eventId: 'event_01',
        ticketId: 'event_01_ticket_01',
        purchaseDate: '21-05-2025',
        isUsed: false,
        usedAt: '',
      }, {
        userTicketId: '1_event_03_event_03_ticket_01',
        userId: 1,
        eventId: 'event_03',
        ticketId: 'event_03_ticket_01',
        purchaseDate: '21-11-2025',
        isUsed: false,
        usedAt: '',
      }
    ]
  },
  {
    id: 2,
    username: 'testUser_1',
    email: 'celikkolozan@gmail.com',
    role: 'user',
    purchasedTickets: [
      // tickets here
    ]
  },
  {
    id: 3,
    username: 'testUser_2',
    email: 'ozeebuzee@gmail.com',
    role: 'user',
    purchasedTickets: [
      // tickets here
    ]
  },
];