const User = require('../models/User');

const store = async (req, res) => {
  const userExists = await User.findOne({
    where: { email: req.body.email }
  });

  if (userExists) {
    return res.status(400).json({ error: 'User already exists.' });
  }

  const { id, first_name, last_name, email } = await User.create(req.body);

  return res.json({ id, first_name, last_name, email });
};

module.exports = { store };
