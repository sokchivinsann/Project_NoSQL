const express = require('express');
const router = express.Router();

const User = require('../model/user');
const Rest = require('../model/restaurant');


// Find Count User
router.get('/user/count', (req, res) => {
    User.count({}).then((response) => {
        console.log( "Number of users:", response );
        res.status(200).json({number_of_users: response});
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

router.get('/user/or', (req, res) => {
    User.find({ $or: [ { address: 'SR' } , { placeOfBirth: 'Kampot' } ] }).then((response) => {
        console.log( "Number of users:", response );
        res.status(200).json({data: response});
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

router.get('/rest/count', (req, res) => {
    Rest.count({}).then((response) => {
        console.log( "Number of users:", response );
        res.status(200).json({number_of_users: response});
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

router.get('/rest/find', (req, res) => {
    Rest.find({}).then((response) => {
        res.status(200).json({data: response});
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});


module.exports = router;