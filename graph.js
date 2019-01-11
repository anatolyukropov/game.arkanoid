  var ctx, width, height, canvas, color, x=width/2;
  
  
  function init(){
	canvas = document.getElementById('canv');
	ctx = canvas.getContext('2d');
	width = canvas.width;
	height = canvas.height;
  };
  
  function fillAll(color){
	  ctx.fillStyle = color;
	  ctx.fillRect(0,0,canvas.width,canvas.height);
  };
  
  function drawRect(x, y, width, height, color){
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
  };
  