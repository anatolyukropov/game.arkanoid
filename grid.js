  var grid = {
	  
	nodes : [],
	
	add : function(x, y, w, h, color){
		var tmp = new _Enemy(x, y, w, h, color);
		this.nodes.push(tmp);
	},
	generate : function (qtl, w, h, color){
		var dw=5;
	    var i1=0;
		var count = Math.floor((canvas.width-2*dw)/(w+dw));
		dw1=((canvas.width - dw - (count * (dw + w))) / 2 )+dw ;
		dx=dw1; dy=dw1;
		for (var i=0; i<count; i+=1){
			this.add(dx, dy, w, h, color);
			dx=dx+w+dw;
			if (i==count-1 && i1<qtl-1){
				i1+=1;
				dy= dy+h+dw;
				i=-1; dx=dw1;
			}
			}
		
	},
	
    destroy : function (en){
//      delete this.nodes[en];
        this.nodes.splice(en,1);
		player.speed=player.speed+0.2;
		ball.speed = ball.speed +0.2;
		player.score +=1;
		document.getElementById('score').innerHTML = player.score;
		console.log(this.nodes.length);
		if (this.nodes.length<1){
			player.level+=1;
			document.getElementById('level').innerHTML = player.level;
			player.score+=10;
			NextLevel();
        };	
	},
	
	draw : function(){
		for (en in this.nodes){
			this.nodes[en].draw();
		}
	},
	
	
};
	
var _Enemy = function(x, y, w, h, color){
    this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
};

_Enemy.prototype.draw = function(){
	drawRect(this.x, this.y, this.w, this.h, this.color);
};

