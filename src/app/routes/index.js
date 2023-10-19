const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const newUser = await User.create({
    first_name: 'Tiago',
    last_name: 'Cardoso',
    email: 'tiago@email.com',
    password_hash: '123123'
  });

  res.json(newUser);
});

module.exports = router;
