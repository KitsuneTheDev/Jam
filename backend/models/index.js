import sequelize from '../config/db.config.js';
import AgeLimit from './AgeLimit.lookup.model.js';
import Currency from './Currency.lookup.model.js';
import DressCode from './DressCode.lookup.model.js';
import Event from './Event.model.js';
import Location from './Location.lookup.model.js';
import Role from './Role.lookup.model.js';
import Ticket from './Ticket.model.js';
import User from './User.model.js';
import UserTicket from './UserTicket.model.js';

// EVENT TABLE ASSOCIATIONS
AgeLimit.hasMany(Event, { foreignKey: 'ageLimitId' });
Event.belongsTo(AgeLimit, { foreignKey: 'ageLimitId' });

DressCode.hasMany(Event, { foreignKey: 'dressCodeId' });
Event.belongsTo(DressCode, { foreignKey: 'dressCodeId' });

Location.hasMany(Event, { foreignKey: 'locationId' });
Event.belongsTo(Location, { foreignKey: 'locationId' });

// USER TABLE ASSOCIATIONS
Role.hasMany(User, { foreignKey: 'roleId' });
// One role can be assigned to many users
User.belongsTo(Role, { foreignKey: 'roleId' });
// Every user can only have one role from the role table

// TICKET TABLE ASSOCIATIONS
Currency.hasMany(Ticket, { foreignKey: 'currencyId' });
Ticket.belongsTo(Currency, { foreignKey: 'currencyId' });

Event.hasMany(Ticket, { foreignKey: 'eventId' });
Ticket.belongsTo(Event, { foreignKey: 'eventId' });

// USERTICKET TABLE ASSOCIATIONS
User.hasMany(UserTicket, { foreignKey: 'userId' });
UserTicket.belongsTo(User, { foreignKey: 'userId' });

Ticket.hasMany(UserTicket, { foreignKey: 'ticketId' });
UserTicket.belongsTo(Ticket, { foreignKey: 'ticketId' });

const db = {
    sequelize,
    AgeLimit,
    Currency,
    DressCode,
    Event,
    Location,
    Role,
    Ticket,
    User,
    UserTicket,
};

export default db;