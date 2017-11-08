'use strict';

 var repository = require('../../data/contactsDataHandler.js');

 module.exports = {
     get: function contacts_get(req, res) {
         res.json(repository.get(req.params['id']))
     }    
 };
