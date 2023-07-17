const express = require('express');
const router = express.Router();

const User = require('../model/user');



router.post('/', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

router.post('/many', (req, res) => {
    User.insertMany(req.body).then((users) => {
        res.status(201).send(users);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});


// Find All Document
router.get('/', (req, res) => {
    const page = req.query.page || 0;
    const limit = req.query.limit || 5;
    //User.find().then((users) => {
    User.paginate({} , { 
        page: page, 
        limit: limit
    }).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// Find Document By Id
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send('Not found!');
        }
        res.send(user);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});


// Find One Document 
router.get('/one/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => {
        if (!user) {
            return res.status(404).send('Not found!');
        }
        res.send(user);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// Find Documents by address
router.get('/address/:address/:gender', (req, res) => {
    User.findOne({ address: req.params.address, gender: req.params.gender }).then((user) => {
        if (!user) {
            return res.status(404).send('Not found!');
        }
        res.send(user);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// Find Document By Id And Update
router.patch('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(user => {
        if (!user) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(user);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});


// Find Document By Id And Delete
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(user => {
        if (!user) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(user);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});


module.exports = router;