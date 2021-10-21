const date = require('../getDate.js');
const Contact = require('../models/contact');

exports.getMainPage =  (req, res) => {
    Contact.fetchContacts(contacts => {
        let today = date.getTodayDateLong();
        res.render('index.ejs', {date: today, myContacts: contacts, error: ""});
    });
}

exports.postNewContact = (req, res) => {
    const newContact = new Contact(req.body.newName, req.body.newNumber);
    newContact.saveContact();
    res.redirect('/');
}

exports.postDeleteContact = (req, res) => {
    console.log(req.body.oldName);
    console.log(req.body.oldNumber);
    Contact.deleteContact(req.body.oldName, req.body.oldNumber);
    res.redirect('/');
}