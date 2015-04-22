var express = require('express'),
    teams = require('./routes/teams'),
    players = require('./routes/players');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/teams', teams.findAll);
app.get('/teams/:id', teams.findById);
app.post('/teams', teams.addTeam);
app.put('/teams/:id', teams.updateTeam);
app.delete('/teams/:id', teams.deleteTeam);
app.get('/players', players.findAll);
app.get('/players/:id', players.findById);
app.use(function(req, res){
    res.status(404).json({response: {status: '404', message: 'you are attempting to use a route that has not been defined'}});
});
app.listen(3000);
console.log('Listening on port 3000...');