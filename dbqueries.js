const sqlite3 = require('sqlite3').verbose();

function getUsers(db, req, res) {
    db.all(`select * from users`, (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        if (!rows) {
            res.send({ error: "no users found" })
        }
        res.send(rows);
    })
}

module.exports = { getUsers };