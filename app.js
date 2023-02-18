const express = require('express');
const app = express();
const items = require('./routes/items');
const connectDB = require('./database/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.static('./public'));

// routes
// app.get('/', (req, res) => {
//     res.send('item manager app');
// });

app.use('/api/v1/items', items);
app.use(notFound);
app.use(errorHandlerMiddleware);

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
