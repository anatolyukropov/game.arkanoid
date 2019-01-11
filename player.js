var player = {
	lavel : 1,
	hp : 0,
	x : 0, 
	y : 0,
	width : 0,
	height : 0,
	color : "null",
	speed : 0,
	score : 0,


  draw : function () {
	drawRect(this.x, this.y, this.width, this.height, this.color);
  },

  move : function () {
	if ((isKeyDown('A') || isKeyDown('Left')) && (this.x >0))
		this.x-=this.speed;
	
    if ((isKeyDown('D') || isKeyDown('Right')) && (this.x+this.width <canvas.width))
		this.x +=this.speed;	
  },
  
  init : function(x,y,w,h,hp,color,speed,score,level){
	  this.level=level;
	  this.x=x;
	  this.y=y;
	  this.width=w;
	  this.height=h;
	  this.hp=hp;
	  this.color=color;
	  this.speed=speed;
	  this.score=score;
	  
  }
};