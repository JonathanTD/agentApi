const mongoose = require('mongoose');
const Customers = require('./Customer');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    id: { type: Number },

    name: {
        type: String, 
        required: [true, 'You need to provide a name']

    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipCode: {
        type: String
    },
    tier: {
        type: Number
    },
    phone: {
        primary: {
            type: String
        },
        mobile: {
            type: String
        }
    },
    customers: {
            type: [Customers]
    }
})

module.exports = Agent = mongoose.model('agent', AgentSchema)
// module.exports = Customer = mongoose.model('customer', Customers)