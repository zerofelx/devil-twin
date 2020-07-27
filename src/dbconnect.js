var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'test',
    database: 'pandora',
    port: 3306 
})

connection.connect(function(err){
    if(err) {
        throw err;
    } else {
        console.log('Conexión Correcta')
    }
}) 

function insert(pass1, pass2) {
    var query = connection.query(`
    INSERT INTO wpa_keys VALUES ('${pass1}', '${pass2}')
    `, function(err) {
        if(err) {
            throw err;
        } else {
            console.log('Datos ingresados correctamente')
        }
    })
    console.log(query)
}

connection.end()

export default {
    insert
}
