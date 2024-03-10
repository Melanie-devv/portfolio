const nodemailer = require('nodemailer');
const result = require('dotenv').config();

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const params = JSON.parse(event.body);

    const output = `
        <p>Vous avez un nouveau message de contact depuis votre merveilleux site portfolio</p>
        <h3>Details du contact</h3>
        <ul>
            <li>Nom: ${params.name}</li>
            <li>Email: ${params.email}</li>
            <li>Objet: ${params.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${params.message}</p>
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

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return { statusCode: 200, body: JSON.stringify({ status: 'success' }) };
    } catch (error) {
        console.log(error);
        return { statusCode: 500, body: JSON.stringify({ status: 'fail' }) };
    }
};