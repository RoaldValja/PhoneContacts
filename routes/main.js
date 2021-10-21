const express = require('express');
const taskController = require('../controllers/mainController');
const router = express.Router();

router.get('/', taskController.getMainPage);

router.post('/', taskController.postNewContact);

router.post('/delete', taskController.postDeleteContact);

module.exports = router;