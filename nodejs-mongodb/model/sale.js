const mongoose = require('mongoose');

const pagination = require('mongoose-paginate-v2');
const saleSchema = new mongoose.Schema({
    
});



saleSchema.plugin(pagination);
module.exports = mongoose.model('sales', saleSchema);
