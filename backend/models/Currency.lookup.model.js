import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Currency = sequelize.define('Currency', {
    currencyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    currencyCode: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    currencyNaame: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {tableName: 'CURRENCIES'});

export default Currency;