const router = require('express').Router();
const agentsController = require('../controllers/agent.controller');

// Return List of all Agents
router.get('/', async (req, res) => {
    const agents = await agentsController.getAllAgents();
    return res.status(200).json(agents);
});

// Retrieve all Agent Details by agent’s INT ID
router.get('/:agentId', async (req, res) => {
    const { agentId } = req.params;
    const agent = await agentsController.findAgentById(agentId);
    return res.json(agent);
})

// List all customers associated with a given Agent&#39;s INT ID (UI will list Name – last, first – and city,
//     state in List View)
router.get('/:agentId/customers', async (req, res) => {
    const { agentId } = req.params;
    let response;
    let status;
    try {
        response = await agentsController.getAgentCustomers(agentId);
        status = 200;
    } catch (e) {
        response = e;
        status = 400;
    }
    return res.status(status).json(response)

})

// Update Any/All Fields by Agent’s INT ID
router.patch('/:agentId', async (req, res) => {
    const { agentId } = req.params;
    const { body } = req;
    let response;
    try {
        response = await agentsController.updateAgentDetails(agentId, body)
    } catch (e) {
        response = e
    }
    return res.json(response)
})

// Ability to Add New Agent
router.post('/new', async (req, res) => {
    let response;
    let status;
    try {
        response = await agentsController.addNewAgent(req.body)
        status = 200;
    } catch (e) {
        response = e
        status = 400
    }
    return res.status(status).json(response)
})

// Ability to Add New Customer
router.post('/:agentId/addCustomer', async (req, res) => {
    const { agentId } = req.params;
    const { body } = req;
    let response;
    let status;
    try {
        response = await agentsController.addNewCustomer(agentId, body);
        status = 200;
    } catch (e) {
        response = e
        status = 400;
    }
    return res.status(status).json(response)
})

// Ability to Delete Existing Customer
router.delete('/:agentId/removeCustomer/:customerId', async (req, res) => {
    const { agentId, customerId } = req.params;
    let response;
    let status;
    try {
        response = await agentsController.removeCustomer(parseInt(agentId), customerId);
        status = 200;
    } catch (e) {
        response = e
        status = 400;
    }
    return res.status(status).json(response)
})   

// Provide ability to Update Customer Information
router.patch('/:agentId/customers/:customerId', async (req, res) => {
    const { agentId, customerId } = req.params;
    const { body: details } = req;
    let response;
    let status;
    try {
        response = await agentsController.updateCustomer(parseInt(agentId), customerId, details);
        status = 200;
    } catch (e) {
        response = e
        status = 400;
    }
    return res.status(status).json(response)
})   


module.exports = router;