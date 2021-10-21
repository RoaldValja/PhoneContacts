const date = require('../getDate.js');
const Contact = require('../models/contact');

exports.getErrorPage = (req, res) => {
    res.send("404. Page not found.");
}
