  var GameContext = ctx
  var FPS = 0;
  var TimeNow;
  var TimeTaken;
  var ASecond = 1000;
  var FPSLimit = 25;
  var StartTime = Date.now();
  var TimeBefore = StartTime;
  var FrameTime = ASecond/FPSLimit;
  var State = { Title:0, Started:1, Paused:2, Over:3 };
  var GameState = State.Title;

  function gameLoop() {
    requestAnimationFrame(gameLoop);
    TimeNow = Date.now();
    TimeTaken = TimeNow - TimeBefore;

    if (TimeTaken >= FrameTime) {
      FPS++
      if((TimeNow - StartTime) >= ASecond){
        StartTime += ASecond;
        doFPS();
        FPS = 0;
      }

      switch(GameState){
        case State.Title :
          break;
        case State.Started :
          break;
        case State.Paused :
          break;
        case State.Over :
          break;
      }
      TimeBefore = TimeNow - (TimeTaken % FrameTime);
    }
  }

  Sprites.onload = function(){
    requestAnimationFrame(gameLoop);
  }

  function drawText(Context,_Color, _X, _Y, _Text, _Size){
    Context.font =  "italic "+ _Size +" bold";
    Context.fillStyle = _Color;
    Context.fillText(_Text, _X, _Y);
  }

  function doFPS(){
    drawText(GameContext,"black",10,24,"FPS : " + FPS,"24px");
  }
   
  