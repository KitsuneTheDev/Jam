import { seedCurrency } from "./currency.seed.js";
import { seedLocation } from "./location.seed.js";
import { seedAgeLimit } from './ageLimit.seed.js';
import { seedDressCode } from './dressCode.seed.js';
import { seedRole } from './role.seed.js';
import { seedEvent } from './event.seed.js';
import { seedTicket } from './ticket.seed.js';
import { seedUser } from './user.seed.js';
import { seedUserTicket } from './userTicket.seed.js';

const seedTable = async () => {
    try {
        await seedLocation();
        await seedCurrency();
        await seedAgeLimit();
        await seedDressCode();
        await seedRole();

        // FROM NOW ON ORDER MATTERS!!! EVENT-> TICKET-> USER-> USERTICKET
        await seedEvent();
        await seedTicket();
        await seedUser();
        await seedUserTicket();
    } catch(error) {
        console.error('-----ERROR SEEDING-----');
    } 
}

seedTable();