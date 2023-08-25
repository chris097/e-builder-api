const Auth = require('../model/auth');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator');

const { JWT_TOKEN, USERNAME, PASSWORD } = process.env;

exports.getUsers = async (req, res) => {
    const auth = await Auth.find();
    res.status(200).json({ data: auth, status: 200 })
};

// exports.registerUser = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const auth = new Auth({
//             email: email,
//             password: password
//         });
//         // if(!fullName) return res.status(400).json({message: 'full name is required.'})
//         if(!email) return res.status(400).json({message: 'email is required.'})
//         if(!password) return res.status(400).json({message: 'password is required.'})
//         const salt = await bcrypt.genSalt(10);
//         auth.password = await bcrypt.hash(auth.password, salt);
//         const token = jwt.sign({ _id: auth._id, email }, JWT_TOKEN, { expiresIn: '1h' });
//         auth.token = token;
//         await auth.save();
//          const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: `${USERNAME}`,
//                 pass: `${PASSWORD}`
//             }
//         });
//         const mailOptions = {
//             from: 'cevBuilder',
//             to: `${email}`,
//             subject: 'Registered to cevBuilder',
//             text: `http://localhost:3000/login/${auth._id}/${token}`
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 return res.status(201).json({ message: "Email sent successfully!" })
//             }
//         });
//         res.status(201).json({ data: auth, status: 201, message: "User successfully registered!" })
//     } catch (err) {
//         res.status(500).json({ message: "User already exists" })
//     }
// };

exports.registerUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const auth = new Auth({
            email: email,
            password: password
        });
        
        if(!email) return res.status(400).json({message: 'email is required.'})
        if(!password) return res.status(400).json({message: 'password is required.'})

        const salt = await bcrypt.genSalt(10);
        auth.password = await bcrypt.hash(auth.password, salt);
        
        // Generate OTP using otp-generator library
        const otp = otpGenerator.generate(6, {alphabets: false, upperCase: false, specialChars: false});
        
        const token = jwt.sign({ _id: auth._id, email, otp }, JWT_TOKEN, { expiresIn: '1h' });
        auth.token = token;

        await auth.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${USERNAME}`,
                pass: `${PASSWORD}`
            }
        });
        
        const mailOptions = {
            from: 'cevBuilder',
            to: `${email}`,
            subject: 'OTP for cevBuilder Registration',
            text: `Your OTP for registration: ${otp} 
            https://cev-builder.vercel.app/verify-otp/${email}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Failed to send OTP" });
            } else {
                return res.status(201).json({data: auth, message: "OTP sent successfully!" });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "User registration failed" });
    }
};

exports.verifyOTP = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        const auth = await Auth.findOne({ email });

        if (!auth) {
            return res.status(404).json({ message: "User not found" });
        }

        const decoded = jwt.verify(auth.token, JWT_TOKEN);

        if (decoded.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        auth.isVerified = true;
        await auth.save();

        res.status(200).json({ message: "User successfully verified", isVerified: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "OTP verification failed" });
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

// exports.loginUserWithToken = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const auth = await Auth.findOne({ email: email });
//         if (!auth) return res.status(400).json({ message: "Crendentials not found" });
//         const token = jwt.sign({ _id: auth._id, email }, JWT_TOKEN, { expiresIn: "1h" });
//         auth.token = token;
//         if (auth) {
//             const validateUser = await bcrypt.compare(password, auth.password);
//             if (validateUser) {
//                 return res.status(200).json({ data: auth, status: 201, message: "Logged in successfully!" })
//             } else {
//                 return res.status(400).json({ message: "email or password is incorrect" })
//             }
//         } else {
//             return res.status(500).json({ message: "email or password is incorrect" })
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// };

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const auth = await Auth.findOne({ email: email });
        if (!auth) return res.status(404).json({ message: "User doesn't exist" });
        const token = jwt.sign({ _id: auth._id }, JWT_TOKEN, { expiresIn: "1h" });
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${USERNAME}`,
                pass: `${PASSWORD}`
            }
        });
        const mailOptions = {
            from: 'cevBuilder',
            to: `${email}`,
            subject: 'Reset Your Password',
            text: `http://localhost:3000/reset-password/${auth._id}/${token}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                return res.status(201).json({ message: "Email sent successfully!" })
            }
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { id, token } = req.params;
        const { password } = req.body;
        // Verify the JWT token
        const decoded = jwt.verify(token, JWT_TOKEN);

        // Hash the new password
        const hash = await bcrypt.hash(password, 10);

        // Update the user's password
        const updatedUser = await Auth.findByIdAndUpdate({ _id: id }, { password: hash });

        res.json({ message: "Success" });
    } catch (err) {
        if (err.name === "JsonWebTokenError") {
            res.status(401).json({ message: "Error with token" });
        } else {
            res.status(500).json({ message: err.message });
        }
    };
};