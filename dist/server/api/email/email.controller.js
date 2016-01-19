/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/emails              ->  index
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.index = index;
exports.send = send;

var _configEnvironment = require('../../config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

var _componentsServicesEmail = require('../../components/services/email');

// Gets a list of Emails

function index(req, res) {
  res.json([]);
}

function send(req, res) {
  var from = req.body.emailFrom;
  var to = req.body.emailTo;
  var subject = 'Email from one of my websites - ' + req.body.name;
  var content = req.body.content;
  (0, _componentsServicesEmail.sendEmail)(from, to, subject, content, function (result) {
    if (result.name === 'Error') {
      return res.status(500).send(false);
    }
    res.status(200).send(true);
  });
}
//# sourceMappingURL=email.controller.js.map
