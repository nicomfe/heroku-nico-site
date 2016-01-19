'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sendEmail = sendEmail;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _configEnvironment = require('../../config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

function sendEmail(from, to, subject, content, callback) {
  var sendgrid = require('sendgrid')(_configEnvironment2['default'].sendgrid_api_key);

  sendgrid.send({
    to: to,
    from: from,
    subject: subject,
    text: content
  }, function (err, json) {
    if (err) {
      callback(err);
      console.log(err);
    } else {
      callback(json);
    }
  });
}

;
//# sourceMappingURL=email.js.map
