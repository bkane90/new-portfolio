const express = require('express');
const sendToMeRouter = express.Router();
const nodemailer = require('nodemailer');

console.log("from sendToMe");

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.error(error)
    } else {
        console.log('user is ready to send mail')
    }
});

// sendToMeRouter.get('/', (req, res, next) => {
//     res.send('API Status: Running')
// });

sendToMeRouter.post('/', (req, res, next) => {
    const mail = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: 'Portfolio Site Contact',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    });
    // transporter.sendMail(mail, (err, res) => {
    //     if (error) {
    //       res.render('contact-failure') // Show a page indicating failure
    //     }
    //     else {
    //       res.render('contact-success') // Show a page indicating success
    //     }
    // })
});

module.exports = sendToMeRouter;