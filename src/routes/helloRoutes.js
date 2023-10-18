const express = require('express');
const router = express.Router();

// Controllers
const helloController = require('../controllers/helloController');

router.get('/', helloController.helloWorld);

module.exports = router;
