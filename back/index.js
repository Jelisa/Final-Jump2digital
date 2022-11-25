const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/api/v1/info', () => console.log("TODO"))

app.listen(PORT, () => console.log("Server running."))