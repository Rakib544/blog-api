const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(console.log('Connect to mongoDB'))
    .then(err => console.log(err))

    app.use("/api/auth", authRoute)
    app.use('/api/users', userRoute)

app.listen('5000', () => {
    console.log('Backend is running');
})