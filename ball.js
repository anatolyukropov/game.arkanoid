var ball = {
	r : 0,
	color : 'null',
	x : 0,
	y : 0,
	speed : 2.8,
	speedx : 2,
    speedy : -2,
	dx : 0,
	i : 0,
	
	init : function(x,y,r,color){
		this.x=x;
		this.y=y;
		this.r=r;
		this.color=color;
	},
	// рисуем шарик
	draw : function (){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	// расчёт угла наклона при отскоке от игрока (зависит от того насколько дальше от центра ты ударил)
	angel : function(){
	    this.dx= Math.ceil(this.x - (player.x + player.width/2));
		if (this.dx<0){
			this.speedx=(Math.cos(Math.PI/2-Math.abs(this.dx/40))*this.speed)*(-1);
	   }else {
			this.speedx=(Math.cos(Math.PI/2-Math.abs(this.dx/40))*this.speed);
		}
		this.speedy=(Math.sin(Math.PI/2-Math.abs(this.dx/40))*this.speed)*(-1);
		this.i+=1;
		},
		
	missball : function() {
		this.x = player.x+player.width/2;
        this.y = player.y-this.r;
        this.speedy=this.speedy*(-1);	
		player.hp-=1;
		if (player.hp<1){
			document.getElementById('hp').innerHTML = player.hp;
			setGame(Clear);
		}else {
		document.getElementById('hp').innerHTML = player.hp;	
		setGame(start);
		};
	},
		
	
	move : function(){
			this.x+=this.speedx;
			this.y+=this.speedy;
		// столкновение шарика с левой и правой и левой границей	
		if (this.x <this.r){
			this.x=this.r;
			this.speedx=this.speedx*(-1);
		}
		if (this.x>canvas.width - this.r){
			this.x=canvas.width-this.r;
			this.speedx=this.speedx*(-1);
		}
		// столкновение шарика с верхней границей
		if (this.y < this.r){
			this.speedy=this.speedy*(-1);
		}
		// столкновение шарика с нижней границей
		if (this.y-this.r > ctx.canvas.height){
			this.missball();
		}
		// столкновение шарика с платформой сверху
		if (this.y+this.r > player.y && (this.y+this.r)<(player.y+player.height) && this.x > player.x && this.x < player.x+player.width){
			this.y=player.y-2-this.r;
			this.angel();
//			this.speedy=this.speedy*(-1);
		}	
		 //столкновение шарика с платформой слева
		if ((this.y > player.y && this.y<(player.y+player.height) && this.x-this.r > player.x && this.x-this.r < player.x+player.width)){
			this.speedx=this.speedx*(-1);
			this.speedy=this.speedy*(-1);
		}	
		// столкновение шарика с платформой справа
		if ((this.y > player.y && this.y<(player.y+player.height) && this.x+this.r > player.x && this.x+this.r < player.x+player.width)){
			this.speedx=this.speedx*(-1);
			this.speedy=this.speedy*(-1);
		}
		// столкновение шарика с сеткой снизу
		for (en in grid.nodes){
		  if (this.x > grid.nodes[en]['x'] && (this.x < grid.nodes[en]['x'] + grid.nodes[en]['w']) &&
            this.y-this.r > grid.nodes[en]['y'] && (this.y-this.r < (grid.nodes[en]['y'] + grid.nodes[en]['h'] ))) {
			this.speedy=this.speedy*(-1);
			grid.destroy(en);
		}
		}
		// столкновение шарика с сеткой сверху
         for (en in grid.nodes){
		  if (this.x > grid.nodes[en]['x'] && this.x < (grid.nodes[en]['x'] + grid.nodes[en]['w']) &&
            this.y+this.r > grid.nodes[en]['y'] && this.y+this.r < (grid.nodes[en]['y'] + grid.nodes[en]['h'] )) {
			this.speedy=this.speedy*(-1);
			grid.destroy(en);
		}
		}
		// столкновение шарика с сеткой справа
		for (en in grid.nodes){
		  if (this.x-this.r > grid.nodes[en]['x'] && this.x-this.r < (grid.nodes[en]['x'] + grid.nodes[en]['w']) &&
            this.y > grid.nodes[en]['y'] && this.y < (grid.nodes[en]['y'] + grid.nodes[en]['h'] )) {
			this.speedx=this.speedx*(-1);
			grid.destroy(en);
		}
		}
		// столкновение шарика с сеткой слева
		for (en in grid.nodes){
		  if (this.x+this.r > grid.nodes[en]['x'] && this.x+this.r < (grid.nodes[en]['x'] + grid.nodes[en]['w']) &&
            this.y> grid.nodes[en]['y'] && this.y < (grid.nodes[en]['y'] + grid.nodes[en]['h'] )) {
			this.speedx=this.speedx*(-1);
			grid.destroy(en);
		}
		}
	},
		
}