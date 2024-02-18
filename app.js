require('dotenv').config();
const cors = require('cors');
const logger = require('morgan');
const express = require('express');

const { adRouter } = require('./routers');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const { error } = require('./schemas/adSchema');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use('/advertisement', adRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
