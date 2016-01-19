'use strict';

import nodemailer from 'nodemailer';
import config from '../../config/environment';

export function sendEmail(from, to, subject, content, callback) {
  const sendgrid  = require('sendgrid')(config.sendgrid_api_key);

  sendgrid.send({
    to: to,
    from: from,
    subject: subject,
    text: content
  }, function(err, json) {
    if (err) {
      callback(err);
      console.log(err);
    } else {
      callback(json);
    }
  });
};