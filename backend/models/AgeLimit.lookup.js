import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const AgeLimit = sequelize.define('AgeLimit', {
    ageLimitId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ageValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'AGELIMIT'
});

export default AgeLimit;