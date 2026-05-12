const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../data/users");

async function register(req, res) {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        const existingUser = users.find(u => u.username === username);

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: Date.now(),
            username,
            password: hashedPassword
        };

        users.push(newUser);

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });
    }
}

async function login(req, res) {

    try {

        const { username, password } = req.body;

        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            token
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = {
    register,
    login
};