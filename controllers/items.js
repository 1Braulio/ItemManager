const Item = require('../models/Item');
const asyncWrapper = require('../middleware/async');

const getAllItems = asyncWrapper( async (req, res) => {
    const items = await Item.find({});
    res.status(200).send({ items });
})

const createItem = asyncWrapper( async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
})

const getItem = asyncWrapper( async (req, res) => {
    const {id: itemId} = req.params;
    const item = await Item.findOne({_id: itemId});
    if (!item) {
        return res.status(404).json({msg: `No item with id ${itemId}`});
    }
    res.status(200).json({item});
})

const deleteItem = asyncWrapper( async (req, res) => {
    const {id: itemId} = req.params;
    const item = await Item.findOneAndDelete({_id: itemId});
    if (!item) {
        return res.status(404).json({msg: `No item with id ${itemId}`});
    }
    // res.status(200).json({item});
    res.status(200).send();
    res.status(200).json({item: null, status: 'success'});
})

const updateItem = asyncWrapper( async (req, res) => {
    const {id: itemId} = req.params;
    const item = await Item.findOneAndUpdate({_id: itemId}, req.body, {
        new: true,
        runValidators: true,
    });
    if (!item) {
        return res.status(404).json({msg: `No item with id ${itemId}`});
    }
    res.status(200).json({item});
})

module.exports = {
    getAllItems,
    createItem,
    getItem,
    updateItem,
    deleteItem,
}