// Jelisa Iglesias

const { BD_ENV } = require('./env.js');
const {createPool} = require('mysql2/promise');

/**
 * The pool constant that contains the DB connection information
 */
const pool = createPool({
            host: BD_ENV.DB_HOST,
            port: BD_ENV.DB_PORT,
            user: BD_ENV.DB_USER,
            password: BD_ENV.DB_PWD,
            database: BD_ENV.DB_NAME
});

const DB_TABLE = BD_ENV.DB_TABLE;

module.exports = {pool, DB_TABLE}