// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var walkTheDOM = function(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
};

var getElementsByClassName = function(className){
  var result = [];

  walkTheDOM(document.body, function(node){
  	if (node instanceof HTMLElement && node.classList.contains(className)) {
  		result.push(node);
  	};
  });
  return result;
};
