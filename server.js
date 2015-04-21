var express = require('express'),
    teams = require('./routes/teams'),
    players = require('./routes/players');

var app = express();

app.get('/teams', teams.findAll);
app.get('/teams/:id', teams.findById);
app.get('/players', players.findAll);
app.get('/players/:id', players.findById);

app.listen(3000);
console.log('Listening on port 3000...');