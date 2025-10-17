import Sequelize from 'sequelize';
const connectServer = (_db, _username, _password, options) => {
    return new Sequelize(
        _db,
        _username,
        _password,
        options,
    );
}

export { connectServer };