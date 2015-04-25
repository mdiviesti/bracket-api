/**
 * Created by mdiviesti on 4/25/15.
 */
var mongo = require('mongodb');
var dbName = 'teamsdb';
var Server = mongo.Server;
var Db = mongo.Db;
var server = new Server('localhost', 27017, {auto_reconnect: true});

module.exports.BSON = mongo.BSONPure;
module.exports.db = new Db(dbName, server);