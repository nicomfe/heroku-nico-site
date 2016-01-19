'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.send);

module.exports = router;
//# sourceMappingURL=index.js.map
