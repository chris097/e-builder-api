const Auth = require('../model/auth');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_TOKEN } = process.env;

exports.getUsers = async (req, res) => {
    console.log(req.headers['authorization'])
    const auth = await Auth.find();
    res.status(200).json({ data: auth, status: 200 })
};

exports.registerUser = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        const auth = new Auth({
            fullName: fullName,
            email: email,
            password: password
        });
        if(!fullName) return res.status(400).json({message: 'full name is required.'})
        if(!email) return res.status(400).json({message: 'email is required.'})
        if(!password) return res.status(400).json({message: 'password is required.'})
        const salt = await bcrypt.genSalt(10);
        auth.password = await bcrypt.hash(auth.password, salt);
        const token = jwt.sign({ _id: auth._id, email }, JWT_TOKEN, { expiresIn: '1h' });
        auth.token = token;
        await auth.save();
        res.status(201).json({ data: auth, status: 201, message: "User successfully registered!" })
    } catch (err) {
        res.status(500).json({ message: "User already exists" })
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const auth = await Auth.findOne({ email: email });
        if (!auth) return res.status(400).json({ message: "Crendentials not found" });
        const token = jwt.sign({ _id: auth._id, email }, JWT_TOKEN, { expiresIn: "1h" });
        auth.token = token;
        if (auth) {
            const validateUser = await bcrypt.compare(password, auth.password);
            if (validateUser) {
                return res.status(200).json({ data: auth, status: 201, message: "Logged in successfully!" })
            } else {
                return res.status(400).json({ message: "email or password is incorrect" })
            }
        } else {
            return res.status(500).json({ message: "email or password is incorrect" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};