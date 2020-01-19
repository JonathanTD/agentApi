
const matchAndAdd = (agents, customers) => {
    spreadAgents = [...agents];
    customers.forEach(customer => {
        let agent = spreadAgents.find(agent => agent.id === customer.agent_id);
        if(agent){
            if(agent && agent.customers){
                agent.customers.push(customer)
            }else{
                agent.customers = [];
                agent.customers.push(customer);
            }
        }
    })
    return spreadAgents;
}

module.exports = matchAndAdd;