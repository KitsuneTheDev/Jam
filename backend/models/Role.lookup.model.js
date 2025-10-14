import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Role = sequelize.define('Role', {
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {tableName: 'ROLES'});

export default Role;