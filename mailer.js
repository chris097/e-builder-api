const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const {engine} = require('express-handlebars');
const path = require('path');

const { USERNAME, PASSWORD } = process.env;

// Configure Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Create a transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'your_email@example.com',
//     pass: 'your_email_password',
//   },
// });

const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${USERNAME}`,
                pass: `${PASSWORD}`
            }
        });

module.exports = { transporter };