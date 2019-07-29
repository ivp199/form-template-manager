const express = require('express');
const bodyParser = require('body-parser')
var createError = require('http-errors');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
var morgan = require('morgan');
const mongoose = require("mongoose");
const logger = require('./utils/logger');
const routes = require('./routes');
const app = express();

mongoose.connect("mongodb+srv://admin_user:ZKmhQsSv4GpKVTTu@atlas-cluster-0-glbri.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.SERVR_PORT || 8080;

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// not found error
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
});