/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/emails              ->  index
 */

'use strict';

import config from '../../config/environment';
import {sendEmail} from '../../components/services/email';

// Gets a list of Emails
export function index(req, res) {
  res.json([]);
}

export function send(req, res) {
  const from = req.body.emailFrom;
  const to = req.body.emailTo;
  const subject = 'Email from one of my websites - '+ req.body.name;
  const content = req.body.content;
  sendEmail(from, to, subject, content, function (result) {
    if (result.name === 'Error') {
      return res.status(500).send(false);
    }
    res.status(200).send(true);
  });
}