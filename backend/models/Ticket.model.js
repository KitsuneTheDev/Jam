import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Ticket = sequelize.define('Ticket', {
    ticketId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ticketType: {
        type: DataTypes.STRING,
        defaultValue: 'Normal',
    },
    ticketPrice: {
        type: DataTypes.FLOAT,
    },
    ticketTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ticketSold: {
        type: DataTypes.INTEGER, // REDUNDANT! REQUIRES FURTHER MEASURES
    }
}, {tableName:'TICKETS'}, {
    indexes: [
        {
            name: 'ticket_event_fk_idx',
            fields: ['eventId'],
        }
    ]
});

export default Ticket;