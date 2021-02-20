// Load env vars
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const authRoutes = require('./routes/auth');

const port = process.env.PORT || 4040;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
