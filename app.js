const express = require('express');
const app = express();
const items = require('./routes/items');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('item manager app');
});

app.use('/api/v1/items', items);


const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}...`));