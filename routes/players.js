var d = require('../includes/database');
var db = d.db;
var BSON = d.BSON;
collectionName = 'players';

db.open(function(err, db) {
    if(!err) {
        db.collection(collectionName, {strict:true}, function(err, collection) {
            if (err) {
                console.log('in the database connection' + err);
            }
        });
    }
});

module.exports.findById = function(req, res) {
    var id = req.params.id;
    db.collection(collectionName, function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            if (err) {
                res.send({'error':'An error has occurred' + err});
            } else {
                res.send(item);
            }
        });
    });
};

module.exports.findAll = function(req, res) {
    db.collection(collectionName, function(err, collection) {
        collection.find().toArray(function(err, items) {
            if (err) {
                res.send({'error':'An error has occurred' + err});
            } else {
                res.send(items);
            }
        });
    });
};

module.exports.addTeam = function(req, res) {
    var team = req.body;
    db.collection(collectionName, function(err, collection) {
        collection.insert(team, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred' + err});
            } else {
                res.send(result[0]);
            }
        });
    });
}

module.exports.updateTeam = function(req, res) {
    var id = req.params.id;
    var team = req.body;
    db.collection(collectionName, function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, team, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred' + err});
            } else {
                res.send(team);
            }
        });
    });
}

module.exports.deleteTeam = function(req, res) {
    var id = req.params.id;
    db.collection(collectionName, function (err, collection) {
        collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'An error has occurred - ' + err});
            } else {
                res.send(req.body);
            }
        });
    });
}