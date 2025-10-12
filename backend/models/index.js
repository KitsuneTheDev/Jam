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

Currency.hasMany(Event, { foreignKey: 'currencyId' });
Event.belongsTo(Currency, { foreignKey: 'currencyId' });

DressCode.hasMany(Event, { foreignKey: 'dressCodeId' });
Event.belongsTo(DressCode, { foreignKey: 'dressCodeId' });

Location.hasMany(Event, { foreignKey: 'locationId' });
Event.belongsTo(Location, { foreignKey: 'locationId' });

// USER TABLE ASSOCIATIONS
Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

// TICKET TABLE ASSOCIATIONS


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