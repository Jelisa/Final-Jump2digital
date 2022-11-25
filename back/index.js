const express = require('express');
const router = require('./routes/routes.js')
const { join } = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json())

app.use(router);

app.listen(PORT, () => console.log("Server running."))