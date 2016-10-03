

//No terminado

/*
 * routes/items.js
*/

//  db model for Item
var Item = require("../models/item_model.js");


/**
 * GET '/api/item'
 * Receives a GET request to get all user details
 * @return {Object} JSON
 */

//Returns all elements on item collection
exports.getAll = function(req,res){
	// mongoose method, see http://mongoosejs.com/docs/api.html#model_Model.find
	Item.find(function(err, data){
		// if err or no users found, respond with error
		if(err || data === null){
  		var jsonData = {status:'ERROR', message: err};
  		return res.json(jsonData);
  		}
		 	// otherwise, respond with the data
		 	res.json(data);

	});

};

//Return all elements on item collection, with color = red
// exports.getColor = function(req,res){
//
// 	var requestedColor = req.params.color;
//
// 	Item.find({ 'color': requestedColor }, 'color model size price', function (err, data) {
// 		// if err or no users found, respond with error
//   	 if(err || data === null){
//   	 var jsonData = {status:'ERROR', message: err};
//   	 return res.json(jsonData);
//   	 }
//   		 // otherwise, respond with the data
//   		 res.json(data);
//
//    });
// };


exports.getEjemplo = function(req,res){

	var requestedColor = req.query.color;

	Item.find({ 'color': requestedColor }, 'color model size price', function (err, data) {
		// if err or no users found, respond with error
  	 if(err || data === null){
  	 var jsonData = {status:'ERROR', message: err};
  	 return res.json(jsonData);
  	 }
  		 // otherwise, respond with the data
  		 res.json(data);

   });
};


// exports.getEjemplo = function(req,res){
// 	var color = req.query.color;
//
//
// 	console.log(color);
//
// };


/**
 * GET '/api/item/:id'
 * Receives a GET request specifying the item to get
 * @param  {String} req.param('id'). The itemId
 * @return {Object} JSON
 * Ejemplo de llamada: http://localhost:5000/api/item/55898ea1e4b0c291746e5e66
 */

exports.getOne = function(req,res){

	var requestedId = req.param('id');

	// mongoose method, see http://mongoosejs.com/docs/api.html#model_Model.findById
	Item.findById(requestedId, function(err,data){

		// if err or no user found, respond with error
		if(err || data == null){
  		var jsonData = {status:'ERROR', message: 'Could not find that Item'};
  		 return res.json(jsonData);
  	}

  	return res.json(data);


	})
}

/**
 * POST '/api/item'
 */

// exports.create = function(req,res){
//
// 	console.log(req.body);
//
// 	// pull out the _id and location
// 	var _id = req.body._id;
// 	var model = req.body.model;
// 	var color = req.body.color;
// 	var size = req.body.size;
// 	var price = req.body.price;
// 	var image_url = req.body.image_url;
// 	//now, geocode that location
// 	  var _item = Item({
// 	  	_id: _id,
// 	  	model: model,
// 		color: color,
// 		size: size,
// 		price: price,
// 		image_url: image_url
// 	  });
//
// 	  _item.save(function(err,data){
// 	  	// if err saving, respond back with error
// 	  	if (err){
// 	  		var jsonData = {status:'ERROR', message: 'Error saving Item'};
// 	  		return res.json(jsonData);
// 	  	}
//
// 	  	console.log('Saved a new Item!');
// 	  	//console.log(data);
//
// 	  	return res.json(data);
//
// 	  })
// }





// /**
//  * POST '/api/update/:id'
//  * Receives a POST request with data of the user to update, updates db, responds back
//  * @param  {String} req.param('id'). The userId to update
//  * @param  {Object} req. An object containing the different attributes of the Item
//  * @return {Object} JSON
//  */
//
// exports.update = function(req,res){
//
// 	var requestedId = req.param('id');
//
// 	// pull out the _id and location
// 	var _id = req.body._id;
// 	var model = req.body.model;
// 	var color = req.body.color;
// 	var size = req.body.size;
// 	var price = req.body.price;
// 	var image_url = req.body.image_url;
//
// 	  var dataToUpdate = {
// 	  	_id: _id,
// 	  	model: model,
// 		color: color,
// 	  	size: size,
// 	  	price: price,
// 	  	image_url: image_url,
// 	  };
//
// 	  // now, update that Item
// 		// mongoose method, see http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
// 	  Item.findByIdAndUpdate(requestedId, dataToUpdate, function(err,data){
// 	  	// if err saving, respond back with error
// 	  	if (err){
// 	  		var jsonData = {status:'ERROR', message: 'Error updating Item'};
// 	  		return res.json(jsonData);
// 	  	}
//
// 	  	console.log('updated the Item!');
// 	  	//console.log(data);
//
// 	  	return res.json(data);
//
// 	  })
// }

/**
 * GET '/api/delete/:id'
 * Receives a GET request specifying the user to delete
 * @param  {String} req.param('id'). The userId
 * @return {Object} JSON
 */

// exports.remove = function(req,res){
//
// 	var requestedId = req.param('id');
//
// 	// Mongoose method, http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
// 	Item.findByIdAndRemove(requestedId,function(err, data){
// 		if(err || data == null){
//   		var jsonData = {status:'ERROR', message: 'Could not find that Item to delete'};
//   		return res.json(jsonData);
// 		}
//
// 		// otherwise, respond back with success
// 		var jsonData = {
// 			status: 'OK',
// 			message: 'Successfully deleted id ' + requestedId
// 		}
//
// 		res.json(jsonData);
//
// 	})
//
// }
