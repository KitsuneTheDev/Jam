import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const UserTicket = sequelize.define('UserTicket', {
    userTicketId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    usedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    purchasedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    qrHash: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {tableName: 'USERTICKETS'});

export default UserTicket;