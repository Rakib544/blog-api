const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');


//CREATE NEW POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }

});


//DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json('You can delete only your post')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})


//GET SINGLE POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL POST
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;