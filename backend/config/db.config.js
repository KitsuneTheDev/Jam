import { connectServer } from '../setup/connectServer.setup.js';
import dotenv from 'dotenv';

dotenv.config();

const _db = process.env.POSTGRES_DB;
const _username = process.env.POSTGRES_USER;
const _password = process.env.POSTGRES_PASSWORD;
const options = {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRES_PORT,
    logging: false,
};

// Sequelize object initialization
const sequelize = connectServer(_db, _username, _password, options);

export default sequelize;