const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const path = require('path');
const result = require('dotenv').config({ path: path.join(__dirname, '.env.local') });

router.post('/send', (req, res) => {
    const output = `
        <p>Vous avez un nouveau message de contact depuis votre merveilleux site portfolio</p>
        <h3>Details du contact</h3>
        <ul>
            <li>Nom: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Objet: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: `"Nodemailer Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "Nouveau contact depuis portfolio",
        text: 'Hello world?',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ status: 'fail' });
        } else {
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).json({ status: 'success' });
        }
    });
});

module.exports = router;