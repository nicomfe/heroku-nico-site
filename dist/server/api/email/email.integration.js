'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

describe('Email API:', function () {

  describe('GET /api/emails', function () {
    var emails;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/emails').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        emails = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      emails.should.be.instanceOf(Array);
    });
  });
});
//# sourceMappingURL=email.integration.js.map
