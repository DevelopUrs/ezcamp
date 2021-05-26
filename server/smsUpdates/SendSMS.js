const TwilioDetails = require('../../config.js')
const express = require('express');

const app = express();

const accountSid = TwilioDetails.TWILIO_ACCOUNT_SID;
const authToken = TwilioDetails.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'There was an update to the camp\'s calendar. ',
    from: TwilioDetails.twilioPhoneNum,
    to: TwilioDetails.myPhoneNum,
  })
  .then((message) => console.log(message.sid));