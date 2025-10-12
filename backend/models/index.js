import sequelize from '../config/db.config.js';
import Event from './Event.model.js';
import DressCode from './DressCode.lookup.model.js';
import Location from './Location.lookup.model.js';
import AgeLimit from './AgeLimit.lookup.js';

Location.hasMany(Event, { foreignKey: 'locationId' });
Event.belongsTo(Location, { foreignKey: 'locationId' });

DressCode.hasMany(Event, { foreignKey: 'dressCodeId' });
Event.belongsTo(DressCode, { foreignKey: 'dressCodeId' });

AgeLimit.hasMany(Event, { foreignKey: 'ageLimitId' });
Event.belongsTo(AgeLimit, { foreignKey: 'ageLimitId' });

const db = {
    sequelize,
    Event,
    DressCode,
    Location,
    AgeLimit,
};

export default db;