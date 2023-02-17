const Item = require('../models/Item');

const getAllItems = (req, res) => {
    res.send('get all items');
}

const createItem = async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
}

const getItem = (req, res) => {
    res.json('get single item');
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