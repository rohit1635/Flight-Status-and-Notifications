const kafka = require('kafka-node');
const { KafkaClient, Consumer } = kafka;
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const twilioClient = twilio('ACe845a0127121d1c4e1eb1f27afb7eb2e', 'cdc46a980ce31402e9729747e147b21c');
const twilioPhoneNumber = '+12529474422';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'notifications', partition: 0 }],
  { autoCommit: true }
);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rdrd1635@gmail.com',
    pass: 'knmb zbqe llhj tuto'
  }
});

const sendEmail = (to, subject, message) => {
  const mailOptions = {
    from: 'rdrd1635@gmail.com',
    to: to,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

const sendSMS = (to, message) => {
  twilioClient.messages.create({
    body: message,
    from: twilioPhoneNumber,
    to: to
  })
  .then((message) => {
    console.log('SMS sent:', message.sid);
  })
  .catch((error) => {
    console.error('Error sending SMS:', error);
  });
};

consumer.on('message', (message) => {
  console.log('Raw message from Kafka:', message);
  const notification = JSON.parse(message.value);
  console.log('Parsed notification:', notification);

  const { method, recipient, message: notificationMessage } = notification;

  if (method === 'Email') {
    console.log(`Sending email to ${recipient} with message: ${notificationMessage}`);
    sendEmail(recipient, 'Flight Notification', notificationMessage);
  } else if (method === 'SMS') {
    console.log(`Sending SMS to ${recipient} with message: ${notificationMessage}`);
    sendSMS(recipient, notificationMessage);
  } else {
    console.error('Unsupported notification method:', method);
  }
});

consumer.on('error', (error) => {
  console.error('Error in Kafka Consumer', error);
});
