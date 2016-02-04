var db = require('../lib/db');


var Session = module.exports;

Session.find = function (sessionId) {

  return db.collection('sessions').find({ id: sessionId })
    .then(function (rows) {
      return rows[0] || Promise.reject( new Error('no_such_session') );
    });

};

Session.findByUserId = function (userId) {

  return db.collection('sessions').find({ user_id: userId })
    .then(function (rows) {
      return rows[0] || Promise.reject( new Error('no_such_session') );
    });

};

Session.create = function (userId) {
  return db.collection('sessions').insert({ user_id: userId })
    .then(function (result) {
      // Knex gives us an array of newly-created record ids.
      // Since we only created one record, we just return the first.
      return result[0];
    });
};
