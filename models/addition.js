const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionSchema = new Schema({
    additionDate: {
        type: Date
        // default: function() {
        //     const newDate = new Date();
        //     return newDate
        // }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    author: String,
    userAvatar: String,
    additionText: {
        type: String,
        required: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Addition', additionSchema)