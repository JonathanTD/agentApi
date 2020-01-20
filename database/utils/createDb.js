const agents = require('../seeders/agents');
const customers = require('../seeders/customers');
const matchAndAdd = require('./joinCustomers');

// create a client to mongodb
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/";

const matchedAgents = matchAndAdd(agents, customers);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("agentapi");

  dbo.collection("agents").insertMany(matchedAgents, (err, res) => {
      if(err) throw err;
  })
  db.close();
});


