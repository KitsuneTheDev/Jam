/*
    TICKETINCLUDES(MAP) TABLE
        INCLUDESID          -- UNIQUE PK (INCLUDES ID + TICKET ID)
        FRINCLUDESID        -- FK
        FRTICKETID          -- FK
*/

export const ticketIncludes = [
    {
        includesId: '1ticket_01',
        frIncludesId: '1',
        frTicketId: 'ticket_01'
    }
]

// EXAMPLE
// RATHER PUT ACTUAL TABLE IN DB THAN HARCODING IT