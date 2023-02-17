const express = require('express');
const app = express();
const items = require('./routes/items');
const connectDB = require('./database/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('item manager app');
});

app.use('/api/v1/items', items);

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();
