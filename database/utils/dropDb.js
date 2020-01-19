var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("agentapi");
  dbo.collection("agents").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});