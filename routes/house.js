var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();

/* GET create update page */
router.get('/update', house_controlers.house_update_Page);

/* GET delete house page */
router.get('/delete', house_controlers.house_delete_Page);
module.exports = router;
