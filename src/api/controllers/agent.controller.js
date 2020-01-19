// const Agent = require('../../../database/models/Agent');
const Agent = require('../../../database/models/Agent');

// const Customer = require('../../../database/models/Customer')
const { verifyAgentIds, verifyAgentHasCustomer } = require('../services/agent.service')

module.exports = {
    getAllAgents: async () => {
        const agents = await Agent.find().select('-customers')
        return agents;
    },

    findAgentById: async agentId => {
        const agent = await Agent.find({id: agentId}).select('-customers')
        return agent;
    },

    getAgentCustomers: async agentId => {
        const agent = await Agent.find({id: agentId})
        return agent.length === 0 ? "no user with that id found" : agent;
    },

    addNewAgent: async details => {
        let response;
        const agent = await new Agent(details);
        response = await agent.save()
        return response;
    },

    updateAgentDetails: async (agentId, details) => {
        let response;
        response = await Agent.findOneAndUpdate({id: agentId}, details, {upsert: true}, (err) => {
            if(err) throw err;
        }).select('-customers');
        return response;

    },

    addNewCustomer: async (agentId, details) => {
        const { agent_id } = details;
        details.agent_id = parseInt(details.agent_id);
        let response;
        if(!agent_id){
            throw {message: 'You must associate this customer with a valid agent_id!'}
        }
        if(verifyAgentIds(agent_id)){
            const agent = await Agent.find({id: agentId});
            agent[0].customers.push(details)
            response = await agent[0].save();
        }
        return response
    },

    removeCustomer: async (agentId, customerId) => {
        let response;
        const isCustomer = await verifyAgentHasCustomer(agentId, customerId)
        if(!isCustomer){
            throw {message: 'This customer does not belong to this agent'}
        }
        const agent = await Agent.find({id: agentId});
        agent[0].customers = agent[0].customers.filter(el => el.guid !== customerId)
        response = await agent[0].save();
        return response
    },

    updateCustomer: async (agentId, customerId, details) => {
        let response;
        const isCustomer = await verifyAgentHasCustomer(agentId, customerId)
        if(!isCustomer){
            throw {message: 'This customer does not belong to this agent'}
        }
        const agent = await Agent.find({id: agentId});
        const updatedCustomer = agent[0].customers.filter(el => el.guid === customerId)
        updatedCustomer[0].set(details) 
        response = await agent[0].save();
        return response
    },
}