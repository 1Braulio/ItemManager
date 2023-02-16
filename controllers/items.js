const getAllItems = (req, res) => {
    res.send('get all items');
}

const createItem = (req, res) => {
    res.send(req.body);
}

const getItem = (req, res) => {
    res.send('get single item');
}

const updateItem = (req, res) => {
    res.send('update item');
}

const deleteItem = (req, res) => {
    res.send('item deleted');
}


module.exports = {
    getAllItems,
    createItem,
    getItem,
    updateItem,
    deleteItem,
}