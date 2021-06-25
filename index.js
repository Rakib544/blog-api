const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const adminRoute = require('./routes/admin');

dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', async(req, res) => {
    res.send('Hello I am working on my blog projects')
})

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(console.log('Connect to mongoDB'))
    .catch(err => console.log(err))

app.use("/api/auth", authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/admin', adminRoute);

app.listen(process.env.PORT || 5000)