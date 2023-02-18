const Item = require('../models/Item');

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).send({ items });
    } catch (error) {
        res.status(500).send({ msg: error });
    }
}

const createItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json({ item });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getItem = async (req, res) => {
    try {
        const {id: itemId} = req.params;
        const item = await Item.findOne({_id: itemId});
        if (!item) {
            return res.status(404).json({msg: `No item with id ${itemId}`});
        }
        res.status(200).json({item});
    } catch (error) {
        res.status(500).json({msg: error});
    }
    
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