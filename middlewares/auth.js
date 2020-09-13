module.exports = {
	ensureAuthenticated: (req, res, next) => {
		if (!req.isAuthenticated()) return res.redirect('/users/login');
		next();
	},
	forwardAuthenticated: (req, res, next) => {
		if (req.isAuthenticated()) return res.redirect('/blogs');
		next();
	},
};