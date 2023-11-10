var house = require('../models/house');
// List of all houses

// List of all house
exports.house_list = async function(req, res) {
    try{
    thehouse = await house.find();
    res.send(thehouse);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific house.
exports.house_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await house.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };
  
// Handle house create on POST.
exports.house_create_post = async function (req, res) {
    console.log(req.body);
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"House_address":"goat", "House_colour":12, "House_capacity":"large"}
    document.House_address = req.body.House_address;
    document.House_colour = req.body.House_colour;
    document.House_capacity = req.body.House_capacity;
    try {
      let result = await document.save();
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
// Handle house delete form on DELETE.
exports.house_delete = function(req, res) {
res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id);
};
// Handle house update form on PUT.
exports.house_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await house.findById( req.params.id)
  // Do updates of properties
  if(req.body.House_address)
  toUpdate.House_address = req.body.House_address;
  if(req.body.House_colour) toUpdate.House_colour = req.body.House_colour;
  if(req.body.House_capacity) toUpdate.House_capacity = req.body.House_capacity;
  if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;

  let result = await toUpdate.save();
  console.log("Sucess " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
  };

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) {
    try{
    thehouse = await house.find();
    console.log(thehouse)
    res.render('house', { title: 'house Search Results', results: thehouse });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };