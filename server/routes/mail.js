const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send', (req, res) => {
    const output = `
        <p>Vous avez un nouveau message de contact</p>
        <h3>Details du contact</h3>
        <ul>
            <li>Nom: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sci.2bm@gmail.com',
            pass: 'your-password'
        }
    });

    let mailOptions = {
        from: '"Nodemailer Contact" <sci.2bm@gmail.com>',
        to: 'sci.2bm@gmail.com',
        subject: 'Node Contact Request',
        text: 'Hello world?',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

module.exports = router;