const mongoose = require('mongoose');

const pagination = require('mongoose-paginate-v2');
const userSchema = new mongoose.Schema({
    _id : String,
    username: String,
    mobilePhone: String,
    gender: String,
    address: String,
    placeOfBirth: String
});

userSchema.plugin(pagination);
module.exports = mongoose.model('users', userSchema);
