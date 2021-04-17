const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// const url = process.env.MAIN_URL || '/api';
app.use(`/api/users`, require('./routes/users'));
app.use(`/api/contacts`, require('./routes/contacts'));
app.use(`/api/auth`, require('./routes/auth'));

// Serve static assets in prod
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
