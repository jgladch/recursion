// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	console.log("next obj");
	console.log(obj);
	console.log(typeof obj);


	var objToString = function(obj){
		var object = obj;
		var objString = '{';

		var keys = Object.keys(object);

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var value = stringifyJSON(object[keys[i]]);

			console.log("key: "+key);
			console.log("value: "+object[keys[i]]+" type: "+typeof object[keys[i]]);

			if (typeof object[keys[i]] === 'function' || typeof object[keys[i]] === 'undefined') {

			} else {
				objString = objString+'"'+key+'":'+value+'';
			};

			if (i + 1 < keys.length && objString !== '{') {
				objString = objString+",";
			};
		};
		console.log(objString+'}');
		return objString+'}';
	};

	if (typeof obj === 'function' || typeof obj === 'undefined'){
		console.log("return null");
		return '';
	} else if (typeof obj === 'string') {
		return '"'+obj+'"';
	} else if (typeof obj === 'number' || typeof obj === 'boolean'){
		return obj.toString();
	} else if (obj === null){
		return "null";
	} else if (Array.isArray(obj)){
		return '[' + _.map(obj, function(item){
      return stringifyJSON(item);
    }) + ']';
	} else if (typeof obj === 'object'){
		console.log(Object.keys(obj));
		return objToString(obj);
	};

};
