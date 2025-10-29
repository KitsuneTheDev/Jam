import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Event = sequelize.define('Event', {
    eventId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isAlcohol: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
        tableName: 'EVENTS'
}, {
    indexes: [
        {
            name: 'event_location_fk_idx',
            fields: ['locationId'],
        }
    ]
});

export default Event;