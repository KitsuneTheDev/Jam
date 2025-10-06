/*
    TICKETS TABLE
        TICKETID        -- UNIQUE PK
        EVENTID         -- FK
        TYPE            -- STRING
        PRICE           -- FLOAT
        TOTAL           -- INTEGER
        SOLD            -- INTEGER !! NEEDS CONTROL OR TRIGGER
        CURRENCYID      -- FK
        INCLUDESID      -- FK
*/

export const tickets = [
    {
        ticketId: 'ticket_01',
        eventId: 'event_01',
        type: 'normal',
        price: 50,
        total: 110,
        sold: 83,
        currencyId: 'currency_02',
        includesId: ''
    }, {
        ticketId: 'ticket_02',
        eventId: 'event_02',
        type: 'normal',
        price: 10,
        total: 50,
        sold: 8,
        currency: 'currency_01',
        includesId: ''
    }, {
        ticketId: 'ticket_03',
        eventId: 'event_03',
        type: 'participant',
        price: 20,
        total: 100,
        sold: 20,
        currencyId: 'currency_04',
        includesId: ''
    }, {
        ticketId: 'ticket_04',
        eventId: 'event_03',
        type: 'Audience',
        price: 50,
        total: 150,
        sold: 80,
        currencyId: 'currency_04',
        includesId: ''
    }, {
        ticketId: 'ticket_05',
        eventId: 'event_04',
        type: 'normal',
        price: 50,
        total: 200,
        sold: 80,
        currencyId: 'currency_02',
        includesId: ''
    }
]