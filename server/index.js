const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");

const routes = require('./routes');
const app = express();

mongoose.connect("mongodb+srv://admin_user:ZKmhQsSv4GpKVTTu@atlas-cluster-0-glbri.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

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

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
});