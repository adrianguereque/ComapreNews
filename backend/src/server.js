require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const searchRoutes = require('./routes/search');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', searchRoutes);


module.exports = app;