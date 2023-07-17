const mongoose = require('mongoose');

const pagination = require('mongoose-paginate-v2');
const restaurantSchema = new mongoose.Schema({
    
});



restaurantSchema.plugin(pagination);
module.exports = mongoose.model('restaurants', restaurantSchema);
