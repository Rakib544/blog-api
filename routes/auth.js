const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//REGISTER
router.post('/register', async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });

        const user = await newUser.save();
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
})


//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(400).json("Authentication Failed")

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json('Authentication Failed')

        const {password, ...rest} = user._doc;
        res.status(200).json(rest)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;