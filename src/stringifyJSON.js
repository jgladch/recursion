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
			objString = objString+'"'+key+'":'+value+'';
			if (i + 1 < keys.length) {
				objString = objString+", ";
			};
		};
		console.log(objString+'}');
		return objString+'}';
	};

	if (typeof obj === 'string') {
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

	// CHAPTER 2 BEGINS HERE

	// console.log("next object");
	// console.log(obj);
	// console.log(typeof obj);

	// var objToString = function(obj){
	// 	var objString = '{';

	// 	if (Object.keys(obj).length > 0) {
	//   	var key = Object.keys(obj)[0];
	//   	var value = obj[Object.keys(obj)[0]];

	//   	delete obj[Object.keys(obj)[0]];

	//   	if (typeof value === 'string') {
	//  			value = '"'+value+'"';
	//  		}

	//   	objString = objString+'"'+key+'": '+value+'';
	//   	if (Object.keys(obj).length > 0){
	//  			objString = objString+", "
	//  		}
 //  		objToString(obj);
	//   	} else {
	//   		objString = objString+'}';
	//   	}
	//   	return objString;
	// };

	// var arrayToString = function(arr){
	// 	console.log("in arrayToString")
	// 	var arrString = '[';

	// 	if (arr.length > 0) {
	// 		for (var i = 0; i < arr.length; i++) {
	// 			if (typeof arr[i] === 'number' || typeof arr[i] === 'boolean' ) {
	// 				arrString = arrString+arr[i].toString()+',';
	// 			} else if (typeof arr[i] === 'string'){
	// 				arrString = arrString+'\"'+arr[i]+'\",';
	// 			};

	// 		};

	// 		if (arrString.slice(-1) === ',') {
	// 			arrString = arrString.slice(0,arrString.length - 1);
	// 		};
	// 		arrString = arrString + ']';
	// 		console.log(arrString);
	// 		return arrString;

	// 	} else {
	// 		arrString = arrString+']';
	// 	};

	// 	console.log(arrString);
	// 	return arrString;
	// };
	
	// if (typeof obj === 'number' || typeof obj === 'boolean') {
	// 	return obj.toString();
	// } else if (typeof obj === 'object'){
	// 	if (obj === null) {
	// 		console.log(obj);
	// 		return "null";
	// 	} else if (obj instanceof Array) {
	// 		console.log("array to string");
	// 		console.log(obj);
	// 		return arrayToString(obj);
	// 	};
	// } else if (typeof obj === 'string'){
	// 	return '"'+obj+'"';
	// }

	//CHAPTER 2 ENDS HERE

	// Tests are currently failing with an empty array. typeof obj === 'object' and obj.toString() isn't working in that case



	// var inner = function(obj){
	//   if (Object.keys(obj).length > 0) {
	//   		var key = Object.keys(obj)[0];
	//   		var value = obj[Object.keys(obj)[0]];

	//   		delete obj[Object.keys(obj)[0]];

	//   		if (typeof value === 'string') {
	//   			value = '"'+value+'"';
	//   		}

	//   		string = string+'"'+key+'": '+value+'';
	//   		if (Object.keys(obj).length > 0){
	//   			string = string+", "
	//   		}
	//   		inner(obj);
	//   	} else{
	//   		string = string+'}';
	//   	}
	// };

	// if (typeof obj === 'object') {
	// 	var object = obj;
 //  		var string = '{';
 //  		console.log(obj);
 //  		console.log(object);
 //  		console.log(window);
 //  		inner(object);
 //  		return string;
	// } else if (typeof obj === 'number' || typeof obj === 'boolean'){
	// 	var object = obj;
	// 	var result = object.toString();
	// 	return result;
	// } else if (typeof obj === 'string'){
	// 	return obj;
	// };



 //  var object = obj;
 //  var string = '{';

	//   var inner = function(obj){
	//   	if (Object.keys(obj).length > 0) {
	//   		var key = Object.keys(obj)[0];
	//   		var value = obj[Object.keys(obj)[0]];

	//   		delete obj[Object.keys(obj)[0]];

	//   		if (typeof value === 'string') {
	//   			value = '"'+value+'"';
	//   		}

	//   		string = string+'"'+key+'": '+value+'';
	//   		if (Object.keys(obj).length > 0){
	//   			string = string+", "
	//   		}
	//   		inner(obj);
	//   	} else{
	//   		string = string+'}';
	//   	}
	//   };

	// if (typeof object === 'object') {
	//   inner(object);
	//   return string;
	// } else if (typeof object === 'number' || typeof object === 'boolean'){
	// 	console.log(object);
	// 	console.log(string);
	// 	var result = object.toString();
	// 	return result;
	//   return;
	// } else {
	//   return '\"'+object+'\"';
	// }
};
