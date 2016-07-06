var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();

app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use(express.methodOverride()); // поддержка put и delete
app.use(app.router); // модуль для простого задания обработчиков путей
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, 
                                                         //который смотрит на папку public/ 
                                                         //(в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах


// var insertDocument = function(db, callback) {
//    db.collection('homes').insertOne( {
//       "address" : {
//          "street" : "Александра невского",
//          "zipcode" : "305000",
//          "building" : '25',
//          "coord" : [ 51.723228, 36.188892 ]
//       },
//       "city" : "Курск",
//       "country" : "РФ",
//       "type" : "Жилой дом"
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the home collection.");
//     callback();
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });

// var findRestaurants = function(db, callback) {
//    var cursor =db.collection('homes').find( );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };


// var findStreet = function(db, callback) {
//    var cursor =db.collection('homes').find( { "address.building" : {$gt: '23'}}  );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   //findRestaurants(db, function() {
//     findStreet(db, function() {


//       db.close();
//   });
// });

