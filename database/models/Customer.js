const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({  
    _id: {
        type: Number
    },
    id: {
        type: Number
    },
    agent_id: {
        type: Number, 
        require: true
    },
    guid: {
        type: String, 
    },
    isActive: {
        type: Boolean, 
    },
    balance: {
        type: String, 
    },
    age: {
        type: String, 
    },
    eyeColor: {
        type: String, 
    },
    name: {
        first: {
            type: String, 
        },
        last: {
            type: String, 
        },
    },
    company: {
        type: String, 
    },
    email: {
        type: String, 
    },
    phone: {
        type: String, 
    },
    address: {
        type: String, 
    },
    registered: {
        type: String, 
    },
    latitude: {
        type: String, 
    },
    longitude: {
        type: String, 
    },
    tags: {
        type: Array, 
    },
})