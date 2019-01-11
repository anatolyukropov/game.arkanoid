var keys = {
	'W' : 87,
	'S' : 83,
	'A' : 65,
	'D' : 68,
	'space' : 32,
	'Right' : 39,
	"Left"  : 37
};

var keyDown = {};

var isKeyDown = function (keyName){
	return keyDown[keys[keyName]] == true;
};

var KeyToStart = function(){
	if (isKeyDown('space')) return true;
}

//window.onload = function () {
    
	window.onkeydown = function setKey(e){
		keyDown[e.keyCode] = true;
	};
    
	window.onkeyup = function clearKey(e) {
		keyDown[e.keyCode] = false;
	};
//	start();
//};

 