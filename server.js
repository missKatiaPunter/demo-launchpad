var express = require('express');
var app = express();
var dba = require('./rundbbuild.js');
var queries = require('./dbqueries.js');
let db = dba.connect();

app.get('/', (req, res) =>{
    res.sendFile("index.html", { root: __dirname });
});

app.get('/api/users', (req, res) =>{
    queries.getUsers(db, req, res);
});

app.listen(3000, () => {
    dba.init(db);
    console.log("The server is listening on port 3000");
});