const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/blog_db').then(() => {
//mongoose.connect('mongodb+srv://sokchivin:cZvcBv2Uj9JCtiA5@clusterprojectnosql.nlxlyls.mongodb.net/blog_db').then(() => {
    console.log("Connected to MongoDB successfully")
}).catch((error) => {
    console.log("Cannot connect to MongoDB!", error);
});
