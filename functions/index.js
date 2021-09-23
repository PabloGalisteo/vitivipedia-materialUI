/* eslint-disable */
<!-- prettier-ignore -->

const functions = require('firebase-functions');
const config = functions.config();
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: { user: config.user.email, pass: config.user.password }
});

// let mailOptions = {
//   from: 'vitivipediainfo@gmail.com',
//   to: 'pablogalisteo86@gmail.com',
//   subject: 'hello there, testing 1',
//   text: 'lorem hello lorem'
// };

// exports.sendMail = functions.https.onRequest((request, response) => {
//   cors(request, response, () => {
//     transporter.sendMail(mailOptions, error => {
//       if(error) {
//         response.send(error)
//       } else {
//         response.send('message sent succesfully')
//       }
//     })
//   })
  
// });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.query;

    mailOptions = {
      from: 'Vitivipedia',
      to: 'vitivipediainfo@gmail.com',
      subject: 'mensaje recibido',
      html: `
      <p style="font-size: 16px">From: ${name} </p>
      <p style="font-size: 16px">Email: ${email} </p>
      <p style="font-size: 16px">Message: ${message} </p>
      `
    };

    transporter.sendMail(mailOptions, error => {
      if (error) {
        response.send(error);
      } else {
        response.send('Mensaje enviado correctamente');
      }
    });

    mailOptions = {
      from: 'Vitivipedia',
      to: email,
      subject: 'Hemos recibido tu mensaje, gracias.',
      html: `
        // here you can paste in the table data html poster created and get rid of the 3 next lines and 
        // uncomment the line with transporter.senMail...
        <p style="font-size: 16px">From: ${name} </p>
        <p style="font-size: 16px">Email: ${email} </p>
        <p style="font-size: 16px">Message: ${message} </p>
        `
    };
     transporter.sendMail(mailOptions)
  });
});
