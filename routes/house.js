var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
// GET request for one house.
router.get('/house/:id', house_controlers.house_detail)
module.exports = router;
