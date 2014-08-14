// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var object = obj;
  var string = '{'

  var inner = function(obj){
  	if (Object.keys(obj).length > 0) {
  		var key = Object.keys(obj)[0];
  		var value = obj[Object.keys(obj)[0]];
  		delete obj[Object.keys(obj)[0]];

  		string = string+'"'+key+'": '+value+'';
  		if (Object.keys(obj).length > 0){
  			string = string+", "
  		}
  		inner(obj);
  	} else{
  		string = string+'}';
  	};
  };

  inner(object);
  return string;

};
