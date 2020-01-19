const agents = require('../seeders/agents');
const customers = require('../seeders/customers');
// const Agent = require('../src/api/models/Agent');
const matchAndAdd = require('./joinCustomers');

// create a client to mongodb
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/";

const matchedAgents = matchAndAdd(agents, customers);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  // var dbo = db.db("agentapi");
  // console.log(agents.length)
  // agents.forEach(el => {
  //   let person = new Agent(el);
  //   // let person = new Agent({_id: el.id, ...el});
  //   let addedCustomers = customers.filter(el => el.agent_id === person.id);
  //   person.customers = [...addedCustomers];
  //   dbo.collection("agents").insertOne(person, (err, res) => {
  //     if(err) throw err;
  //   })
  // })
    // })
  const dbo = db.db("agentapi");

  dbo.collection("agents").insertMany(matchedAgents, (err, res) => {
      if(err) throw err;
  })
  db.close();
});


