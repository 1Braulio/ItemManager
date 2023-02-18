const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be longer than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Item', ItemSchema); // name and a schema
