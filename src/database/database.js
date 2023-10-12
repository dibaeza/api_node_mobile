import pgPromise from 'pg-promise';

import config from "./../config.js";

const pgp = pgPromise();

const cn = {
    host: config.host,
    port: config.port_bd,
    database: config.database,
    user: config.user,
    password: config.password,
    max: 30,
    ssl: true
};

const db = pgp(cn);

export const getConnection = () =>{
    return db;
};