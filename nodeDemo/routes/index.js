(function(routes){

	var todoItemRoutes = require('./todoItemRoutes')

	routes.init = (app) => {
		todoItemRoutes.init(app);
	}

})(module.exports);