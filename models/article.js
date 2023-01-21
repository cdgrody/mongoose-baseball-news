const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    headline: {
        type: String,
        require: true
    }, 
    articleDate: {
        type: Date,
        default: function() {
            const newDate = new Date();
            return newDate
        }
    },
    author: userIdSchema,
    articleText: {
        type: String,
        require: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

const commentSchema = new Schema({
    contentText: {
        type: String,
        require: true
    },
    author: userIdSchema
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)