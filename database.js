const {Pool} = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'MyDB',
//     password: '123123',
//     port: 5432,
// })

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if(err) throw err
    console.log("Connect to PostgreSQL successfully!");
})

module.exports = pool
