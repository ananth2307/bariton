const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mailer = require('./mailer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();
const port = process.env.PORT || 80;
app.use('/api/mailer', mailer);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});