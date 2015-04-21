var express = require('express'),
    teams = require('./routes/teams');

var app = express();

app.get('/teams', teams.findAll);
app.get('/teams/:id', teams.findById);

app.listen(3000);
console.log('Listening on port 3000...');