const express = require('express');
const routes = require('./app/routes');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🔥 Server started at ${PORT}`);
});
