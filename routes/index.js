
/*
 * routes/index.js
 *
 * Routes contains the functions (callbacks) associated with request urls.
 */


// Root ('localhost:5000/') --> Use to confirm if the backend is working correctly
exports.index = function(req, res) {

	console.log("main route requested");


	var data = {
		status: 'OK',
		message: 'Welcome to Selfit´s Backend.--------'
	}

	// respond back with the data
	res.json(data);

}
