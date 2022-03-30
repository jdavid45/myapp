const mysql = require('mysql2/Promise')

const conection =mysql.createPool({
    connectionLimit:10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
})

conection.getConnection(function(err, connection) {
    if (err) {
        console.log('error al conectar')
        throw err
    }
    console.log("Conexion hecha")
    return connection
})
module.exports =connection