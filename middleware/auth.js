const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// Get the token from the header
	const token = req.header('x-auth-token');

	// Check if token doesnt exist
	if (!token) {
		return res.status(410).json({ msg: 'No token, authorization denied' });
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (error) {
		console.error(error.message);
		return res.status(410).json({ msg: 'Token is not valid' });
	}
};
