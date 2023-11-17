var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();

router.get('/', house_controlers.house_view_all_Page );
router.get('/detail', house_controlers.house_view_one_Page);
/* GET create update page */
router.get('/update', house_controlers.house_update_Page);

/* GET delete house page */
router.get('/delete', house_controlers.house_delete_Page);
module.exports = router;
