// var path = require('path');
// var pmongo = require('promised-mongo');
// var db = pmongo("mongodb://localhost:27017/shortly-database") // for heroku, plug in the url here?

// module.exports = db;

// Retrieve
var MongoClient = require('mongodb').MongoClient;
// Connect to the db - db below contains the connection information

var Mongo = {
  connect: function(callback){
      MongoClient.connect("mongodb://localhost:27017/shortly-database", function(err, db) {
      if(err) { return console.dir('There is an ERROR:', err)}
      console.log("We are connected");
      Mongo.db = db;
      callback();
    })
  },
  collection : function(name) {

    return Mongo.db.collection(name);
  }
}

      // db.createCollection('users' , function(err, collection){});

      // db.createCollection('urls', function(err, collection) {});

      // db.createCollection('clicks', function(err, collection) {});

      // db.createCollection('sessions', function(err, collection) {});

      // db.createCollection('testCollection', function(err, collection) {});

      // console.log('This is DB:', db);

      // db.collection('testCollection').insert({username: 'Trfgqerha'})




  // db.collection('testCollection').find()
  // .then(function(val){
  //   console.log('This is the VAL:', val);
  // })
  // .catch(function(err){
  //   console.log("This is the ERROR:", err)



module.exports = Mongo;


// })
// .then(function(db){
//   console.log('This is DB:', db)
//   db.testCollection.insert({username: 'ThisName'});
// })
// .catch(function(err){
//   console.log('WE GOT ERROR:', err);
// });
