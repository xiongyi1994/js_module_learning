// db.js
var orm = require('orm')

var connections = {};

function setup(db) {

}

module.exports = function(host, database, cb) {
  if (connections[host] && connections[host][database]) {
    return connections[host][database];
  }

  var opts = {
    host: host,
    database: database,
    user: 'wushuu',
    password: 'woyoadmin'
    protocol: 'postgres',
    port: '5432',
    query: {
      pool: true
    }
  };

  orm.connect(opts, function(err, db) {
    if (err) return cb(err);

    connections[host] = connections[host] || {};
    connections[host][database] = db;
    setup(db);
    cb(null, db);
  });
};