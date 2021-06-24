const router = require('express').Router();
const Admin = require('../models/Admin');


router.post('/addAdmin', async (req, res) => {
    try {

        const newUser = new Admin({
            email: req.body.email,
        });

        const user = await newUser.save();
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;