const nodemailer = require('nodemailer');

const { USERNAME, PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${USERNAME}`,
                pass: `${PASSWORD}`
            }
        });

module.exports = { transporter };