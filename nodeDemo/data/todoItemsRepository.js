(function(repository){

	var index = 3;

	var rawItems = [{
		id: 1,
		title: 'item 1',
		description:'There is some descriptions',
		key: 'item1'
	},{
		id: 2,
		title: 'item 2',
		description:'There is some descriptions',
		key: 'item2'
	},{
		id: 3,
		title: 'item 3',
		description:'There is some descriptions',
		key: 'item3'
	}];


	function getNextId(){
		return ++index;
	}

	function getIndex(id){
		var matchedIndex = rawItems.findIndex(o=>{
			return o.id == id;
		})
		return matchedIndex;
	}
	
	repository.addItem = function(item){
		var newItem = {
			id: getNextId(),
			title: item.title
		};
		rawItems.push(newItem);
	}
	
	repository.getAllItems = function(next){
		return next(rawItems);
	}

	repository.getItemById = function(id, next){
		var matchedIndex = getIndex(id);
		if(matchedIndex > -1){
			next(rawItems[matchedIndex]);
		}
		else{
			next(null, new Error("Item is not found."));
		}
	}

	repository.deleteItem = function(id, next){
		var matchedIndex = getIndex(id);
		if(matchedIndex > -1){
			rawItem.splice(matchedIndex, 1);
		}
		else{
			next(new Error("Item is not found."));
		}
	}

	repository.updateItem = function(id, item, next){
		var matchedIndex = getIndex(id);
		if(matchedIndex > -1){
			rawItem[matchedIndex].title = item.title;
			next();
		}
		else{
			next(new Error("Item is not found."));
		}
	}


})(module.exports);