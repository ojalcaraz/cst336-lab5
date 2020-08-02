const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ehr613avj2onk8bf",
    password: "bm9vzxtglmz1ut63",
    database: "j0myc4e5tfvrmy01"
});

module.exports = pool;