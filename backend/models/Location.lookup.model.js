import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Location = sequelize.define('Location', {
    locationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    locationName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'LOCATIONS'
});

export default Location;