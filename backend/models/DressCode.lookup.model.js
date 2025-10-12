import { DataTypes } from 'sequelize';
import sequilize from '../config/db.config.js';

const DressCode = sequilize.define('DressCode', {
    dressCodeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dressCodeName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'DRESSCODE'
});

export default DressCode;