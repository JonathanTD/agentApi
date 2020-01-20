const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const agentRoute = require('./api/routers/agent.router');
// const customerRoute = require('./api/routers/customer.router');

const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/agents', agentRoute)
// app.use('/customer', customerRoute)

mongoose
    .connect('mongodb://localhost/agentapi', { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err) console.log(err)
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

app.listen(4000);
console.log('running on port 4000');

