const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const itemRoutes = require('./routes/items.js');

const app = express();

app.use(cors({
    origin: ['https://wmt-mern-item-manager.netlify.app', 'http://localhost:5000']
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then (() => console.log("MongoDB connected "))
    .catch(err => console.log(err));



app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

