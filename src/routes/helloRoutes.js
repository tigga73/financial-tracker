const express = require('express');
const helloController = require('../app/controllers/helloController');

const router = express.Router();

router.get('/', helloController.helloWorld);

module.exports = router;
