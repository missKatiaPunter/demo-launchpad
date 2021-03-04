const sqlite3 = require('sqlite3').verbose();

const connect = () => {
    let db = new sqlite3.Database('./db/mydb', err => {
        if (err) {
            return console.error(err.message);
        }
        console.log("We have connected to our SQL database");
    })
    return db;
}

function init(db) {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS users (userid INTEGER PRIMARY KEY, name TEXT)`, (err) => {
            if (err) { console.log(err) } else { console.log("Created table users") }
        });
        db.run(`INSERT INTO users (name) VALUES ("Emily"), ("Amran")`, err => {
            if (err) { console.log(err) } else { console.log("Inserted some users") }
        });
    });
  }
  

module.exports = { connect, init };
