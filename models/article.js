const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    contentText: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    author: String,
    userAvatar: String,
}, {
    timestamps: true
})

const articleSchema = new Schema({
    headline: {
        type: String,
        required: true
    }, 
    articleDate: {
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
    articleText: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)