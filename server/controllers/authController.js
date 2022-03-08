const User = require("../models/user");

exports.getUser = function (req, res, next) {
	res.json({ message: "hello world" });
};
