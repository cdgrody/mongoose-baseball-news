const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    contentText: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

const articleSchema = new Schema({
    headline: {
        type: String,
        required: true
    }, 
    articleDate: {
        type: Date,
        // default: function() {
        //     const newDate = new Date();
        //     return newDate
        // }
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
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