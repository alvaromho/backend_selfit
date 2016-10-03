var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html


// Item schema acording to database format.
var itemSchema = new Schema({
	model: String,
	color: String,
	size: String,
	price: String,
	image_url: String,

})

// export model so we can interact with it in other files
module.exports = mongoose.model('Item',itemSchema, "item");
