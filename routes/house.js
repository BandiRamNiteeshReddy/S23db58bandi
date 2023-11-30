var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
router.get('/', house_controlers.house_view_all_Page );
// GET request for one house
router.get('/house/:id', house_controlers.house_detail);
/* GET detail house page */
router.get('/detail', house_controlers.house_view_one_Page);
/* GET create house page */
router.get('/create',secured, house_controlers.house_create_Page);
/* GET create update page */
router.get('/update',secured, house_controlers.house_update_Page);
/* GET delete house page */
router.get('/delete',secured, house_controlers.house_delete_Page);


module.exports = router;