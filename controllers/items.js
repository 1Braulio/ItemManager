const Item = require('../models/Item');
const asyncWrapper = require('../middleware/async');
const {createCustomAPIError} = require('../errors/custom-error');

const getAllItems = asyncWrapper( async (req, res) => {
    const items = await Item.find({});
    res.status(200).json({ items });
})

const createItem = asyncWrapper( async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
})

const getItem = asyncWrapper( async (req, res, next) => {
    const {id: itemId} = req.params;
    const item = await Item.findOne({_id: itemId});
    if (!item) {
        return next(createCustomAPIError(`No item with id ${itemId}`, 404));
    }
    res.status(200).json({item});
})

const deleteItem = asyncWrapper( async (req, res, next) => {
    const {id: itemId} = req.params;
    const item = await Item.findOneAndDelete({_id: itemId});
    if (!item) {
        return next(createCustomAPIError(`No item with id ${itemId}`, 404));
    }
    // res.status(200).json({item});
    // res.status(200).send();
    res.status(200).json({item: null, status: 'success'});
})

const updateItem = asyncWrapper( async (req, res, next) => {
    const {id: itemId} = req.params;
    const item = await Item.findOneAndUpdate({_id: itemId}, req.body, {
        new: true,
        runValidators: true,
    });
    if (!item) {
        return next(createCustomAPIError(`No item with id ${itemId}`, 404));
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