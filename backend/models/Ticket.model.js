import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const Ticket = sequelize.define('Ticket', {
    ticketId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ticketType: {
        type: DataTypes.STRING,
        allowNull: false,
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
}, {tableName:'TICKETS'});

export default Ticket;