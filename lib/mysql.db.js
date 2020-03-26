var mysql = require('mysql')
class MysqlObject {
    constructor() {
        this.connection = mysql.createConnection({
            connectionLimit : 10,
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'python_db'
        });
    }

    create = () => {

    }

    update = (sql, success, fail) => {

    }

    query = (sql, callback) => {
        if (!this.connection) return;
        sql && this.connection.query(sql, (err, result) => {
            callback(err || null,result)
        })
    }

    delete = () => {

    }

    destroy = () => {
        if (this.connection) this.connection.destroy()
    }
    end = () => {
        if (this.connection) this.connection.end()
    }
}


module.exports = new MysqlObject();