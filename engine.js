document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
});

var _renderer = (function(){
	return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame  ||
	window.mozRequestAnimationFrame     ||
	window.oRequestAnimationFrame       ||
	window.msRequestAnimationFrame      ||
	function (callback) {
		setTimeout(callback, 1000/60);
	};
})();

var _engine = function () {
		console.log('Игровой цикл не инициализирован');
	};
	 
var startGame = function (game) {
	if (typeof game == 'function') {
		_engine = game;
	}
    gameLoop();
};

var setGame = function (game){
	if (typeof game == 'function'){
		_engine = game;
	}
};

var gameLoop = function(){
	_engine();
	_renderer(gameLoop);
};


var Clear = function(){
	ctx.clearRect(0, 0, width, height);
	grid.nodes = [];
	ball.speed=2.8;
    ball.speedx = 2;
    ball.speedy = -2;
    player.speed=4; 
	player.level=1;
	ctx.fillStyle = "#00F";
    ctx.strokeStyle = "#F00";
    ctx.font = 'bold 30px sans-serif';
	ctx.shadowColor = "#F00";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.strokeText("Игра окончена ваш счёт равен "+player.score, 40, 100);
	ctx.strokeText("Для продолжения нажмите пробел ", 40, 150);
	localStorage.setItem('MyRecord', player.score);
	document.getElementById('record').innerHTML = localStorage.getItem('MyRecord');
	console.log('сторедж ='+localStorage.getItem('MyRecord'));
    if (KeyToStart()){
	player.score=0;
    player.hp=3;
	document.getElementById('level').innerHTML = player.level;
	document.getElementById('score').innerHTML = player.score;
	document.getElementById('hp').innerHTML = player.hp;
	grid.generate(1, 60, 30, 'red');
	setGame(start);
	};
};
var NextLevel = function (){
	ball.init((player.x + Math.ceil(player.width/2)), player.y-6, 6, 'black'); 
	console.log(ball.x);
	console.log(ball.y);
	grid.nodes = [];
	grid.generate(player.level, 60, 30, 'red');
	setGame(start);
};