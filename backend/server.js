const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mern-crud');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const userRouter = require('./routes/user');
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
