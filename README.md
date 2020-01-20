<h2>Agent API</h2>

1. Clone the repo -- git@github.com:JonathanTD/agentApi.git

2.  Ensure that you have mongoDB installed and running on your machine
    <a>https://docs.mongodb.com/manual/installation/</a>

3. CD into your working directory and install dependencies via *npm install*

4.  create and seed your database
        $ npm run reset:db
        --you can drop db at anytime using $ npm run drop:db
        --you can populate db with json files in seeders dir anytime using $ npm run create:db

5. start server via $ npm start

Description of routes:

'Agent List Page':
    [GET] '/agents' -- return list of all agents
    [POST] '/agents/new' create new agent

'Agent Detail Page':
    [GET] '/agents/:agentId -- Retrieve all Agent Details by agent’s INT ID
    [PATCH] '/agents/:agentId --Update Any/All Fields by Agent’s INT ID

'Agents Customer List View Page':
    [GET] '/agents/:agentId/customers' -- List all customers associated with a given Agent&#39;s INT ID (UI will list Name – last, first – and city,
           state in List View)
    [POST] '/agents/:agentid/addCustomer' -- Ability to Add New Customer
    [DELETE] 'agents/:agentId/removeCustomer/:customerId' --Ability to Delete Existing Customer

'Agents Customer Detail Page': 
    [GET] '/agents/:agentId/customers' -- List all customers associated with a given Agent&#39;s INT ID (UI will list Name – last, first – and city,
           state in List View)
    [PATCH] 'agents/:agentId/customers/:customerId --Provide ability to Update Customer Information

 