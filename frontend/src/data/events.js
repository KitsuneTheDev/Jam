/*
  EVENTS TABLE
    EVENTID       -- UNIQUE PK
    EVENTNAME     -- STRING
    EVENTDATE     -- DATE
    LOCATIONID    -- FK
    DESCRIPTION   -- STRING
    ISALCOHOL     -- BOOLEAN
    DRESSCODEID   -- FK
    AGELIMITID    -- FK
    IMAGEID       -- FK
*/

export const events = [
  {
    eventId: 'event_01',
    eventName: 'Roof Party',
    eventDate: '2025-11-3',
    locationId: 'location_01',
    description: 'Chill rooftop sunset party with relaxing musics.',
    alcohol: true,
    dressCodeId: 'dressCode_01',
    ageLimitId: 'limit_04',
    imageId: 'imageId_01',
    tickets: [
      { 
        ticketId: 'event_01_ticket_01', 
        type: 'Normal', 
        price: 50,
        soldTickets: 83,
        totalTickets: 110,
        included: 'A few type soft and alcoholic drinks.',
        curreny: 'EUR' },
    ],
  },
  {
    eventId: 'event_02',
    eventName: `Let's Speek French`,
    eventDate: '2025-11-20',
    locationId: 'location_02',
    description: 'A speaking event for practising French for all levels.',
    alcohol: false,
    dressCode: 'dressCode_02',
    ageLimitId: 'limit_01',
    imageId: 'imageId_03',
    tickets: [
      { 
        ticketId: 'event_02_ticket_01',
        type: 'Normal',
        price: 10,
        soldTickets: 8,
        totalTickets: 50,
        included: 'A espresso based coffee you select and various apitizers.',
        curreny: 'USD' },
    ],
  },
  {
    eventId: 'event_03',
    eventName: 'Dancing Through Night',
    eventDate: '2026-02-1',
    locationId: 'location_03',
    description: 'Ballroom dance event.',
    alcohol: false,
    dressCode: 'dressCode_03',
    ageLimitId: 'limit_03',
    imageId: 'imageId_02',
    tickets: [
      { 
        ticketId: 'event_03_ticket_01',
        type: 'Participant',
        price: 20,
        soldTickets: 20,
        totalTickets: 100,
        included: '',
        curreny: 'GBP', 
    }, { 
        ticketId: 'event_03_ticket_02',
        type: 'Audience',
        price: 50,
        soldTickets: 80,
        totalTickets: 150,
        included: 'Red Wine',
        curreny: 'GBP',
    },
    ],
  },
  {
    eventId: 'event_04',
    eventName: 'Dreams Land',
    eventDate: '2026-03-15',
    locationId: 'location_03',
    description: 'dressCode_04.',
    alcohol: false,
    dressCode: 'Costume',
    ageLimitId: 'limit_03',
    imageId: 'imageId_04',
    tickets: [
    { 
        ticketId: 'event_04_ticket_01',
        type: 'Normal',
        price: 50,
        soldTickets: 80,
        totalTickets: 200,
        included: 'Alcoholic drinks',
        curreny: 'EUR',
    },
    ],
  },
];