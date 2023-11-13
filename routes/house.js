var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
// GET request for one house.
router.get('/detail', house_controlers.house_view_one_Page);
module.exports = router;
