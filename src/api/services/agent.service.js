const Agent = require('../../../database/models/Agent');

module.exports = {
    verifyAgentIds: async agentId => {
        const agents = await Agent.find().select('-customers');
        let agentIds = agents.map(el => el.id)
        return agentIds.includes(parseInt(agentId))
    },

    verifyAgentHasCustomer: async (agentId, customerId) => {
        const agent = await Agent.find({id: agentId});
        const customerIds = agent[0].customers.map(el => el.guid)
        return customerIds.includes(customerId)
    }
}