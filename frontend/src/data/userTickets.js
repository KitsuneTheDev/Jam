/*
    USERTICKETS TABLE
        USERTICKETID        -- UNIQUE PK
        TICKETID            -- FK
        USERID              -- FK
        ISUSED              -- BOOLEAN
        USEDAT              -- DATE !! NULLABLE
        PRUCHASEDATE        -- DATE
        QRHASH              -- UNIQUE
*/

export const userTickets = [
    {
        userTicketId: 'userTicketId_01',
        ticketId: 'ticket_01',
        userId: 'user_01',
        isUsed: false,
        usedAt: '',
        purchaseDate: '06.10.2025',
        qrHash: ''
    }, {
        userTicketId: 'userTicket_02',
        ticketId: 'ticket_04',
        userId: 'user_01',
        isUsed: false,
        usedAt: '',
        purchaseDate: '02.10.2025',
        qrHash: ''
    }
]