(function(routes){

	var todoItemRepository = require('../data/todoItemsRepository');


	routes.init = (app) => {
		app.get('/api/todoItems',(req, res)=>{
			todoItemRepository.getAllItems((item)=>{
				app.set('content-type', 'application/json');
				res.send(item);
			});
		});

		app.get('/api/todoItems/:todoItemId', (req, res)=>{

			todoItemRepository.getItemById(req.params.todoItemId, (item, err)=>{
				if(err){
					throw err;
				}
				else{
					app.set('content-type', 'application/json');
					res.send(item);
				}
			});

		});

		app.post('/api/todoItems', (req, res)=>{
			todoItemRepository.addItem({title: req.body.title}, (err)=>{
				if(err){
					throw err;
				}
				else{
					res.sendStatus(201);
					res.send("created");
				}
			});
		});
	}
})(module.exports);