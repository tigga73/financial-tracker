const express = require('express');
const router = require('./routes/helloRoutes');

const PORT = 3000;

const app = express();

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`🔥 Server started at ${PORT}`);
});
