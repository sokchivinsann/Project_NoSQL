const express = require('express');
const router = express.Router();

const Post = require('../model/post');
// Add post
router.post('/', (req, res) => {
    console.log(req.body);
    const posts = new Post(req.body);
    // Post.insertMany(req.body).then((response) => {
    posts.save().then((response) => {
        res.status(200).json(
            { 
                status: 200,
                message: 'Success',
                data: response 
            });
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500).json({ 
            status: 500,
            message: 'Failed'
        });
    });
});
// Find all posts
router.get('/', (req, res) => {
    const page = req.query.page || 0;
    const limit = req.query.limit || 2;
    //User.find().then((users) => {
    Post.paginate({} , { 
        page: page, 
        limit: limit
    }).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// Find Document By id
router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then((response) => {
        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.send(response);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});
// Find Document By Id And Update
router.patch('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(response => {
        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(response);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});
// Find Document By Id And Delete
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id).then(response => {
        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(response);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});
module.exports = router;