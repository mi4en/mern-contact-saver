const express = require('express');

const app = express();

const url = process.env.MAIN_URL || '/api';
app.use(`${url}/users`, require('./routes/users'));
app.use(`${url}/contacts`, require('./routes/contacts'));
app.use(`${url}/auth`, require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
