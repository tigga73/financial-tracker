const helloWorld = (req, res) => {
  return res.json({ ok: true });
};

module.exports = {
  helloWorld,
};
