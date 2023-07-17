const mongoose = require('mongoose');

const pagination = require('mongoose-paginate-v2');
const postSchema = new mongoose.Schema({
    username: String,
    post: String,
    like: String,
    comment: String,
    share: String
});



postSchema.plugin(pagination);
module.exports = mongoose.model('posts', postSchema);
