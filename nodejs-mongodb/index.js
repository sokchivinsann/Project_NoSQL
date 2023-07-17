require('./db/init-db')

const express = require('express');
const cors = require('cors');
const app = express();

const saleRoute = require('./controller/sale_controller')
const userRoute = require('./controller/user_controller')
const dashboardRoute = require('./controller/dashboard_controller')
const postRoute = require('./controller/post_controller')

app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.listen(3000, (req, res) => {
    console.log("Service is running with port 3000");
});

app.use('/api/v1/users' , userRoute);
app.use('/api/v1/dashboard' , dashboardRoute);
app.use('/api/v1/sales' , saleRoute);
app.use('/api/v1/posts' , postRoute);




