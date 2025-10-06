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
    imageId: 'imageId_01'
  },
  {
    eventId: 'event_02',
    eventName: `Let's Speek French`,
    eventDate: '2025-11-20',
    locationId: 'location_02',
    description: 'A speaking event for practising French for all levels.',
    alcohol: false,
    dressCodeId: 'dressCode_02',
    ageLimitId: 'limit_01',
    imageId: 'imageId_03'
  },
  {
    eventId: 'event_03',
    eventName: 'Dancing Through Night',
    eventDate: '2026-02-1',
    locationId: 'location_03',
    description: 'Ballroom dance event.',
    alcohol: false,
    dressCodeId: 'dressCode_03',
    ageLimitId: 'limit_03',
    imageId: 'imageId_02'
  },
  {
    eventId: 'event_04',
    eventName: 'Dreams Land',
    eventDate: '2026-03-15',
    locationId: 'location_03',
    description: 'dressCode_04.',
    alcohol: false,
    dressCodeId: 'Costume',
    ageLimitId: 'limit_03',
    imageId: 'imageId_04'
  },
];