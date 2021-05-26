import TwilioDetails from '../../config.js';

const express = require('express');
const http = require('http');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('The robots are coming! Head for the hills!');
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Express Server listening on port 3000.');
});