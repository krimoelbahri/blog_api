const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.signupUser = asyncHandler(async function (req, res) {
	const { name, email, password, confirmPassword } = req.body;
	if (!name || !email || !password || !confirmPassword) {
		res.status(400);
		throw new Error("all fields are required");
	}

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	if (password !== confirmPassword) {
		res.status(400);
		throw new Error("Passwords didn't match");
	}

	//hashing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({ name, email, password: hashedPassword });
	if (user) {
		res.status(201).json(user);
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

exports.signinUser = function (req, res, next) {
	res.json({ message: "hello world" });
};
