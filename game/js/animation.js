$(document).ready(function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  document.body.appendChild(canvas);
  addEnemy();
  addEnemy();
  addEnemy();
  addEnemy();
  addEnemy();
  setInterval(addEnemy, 3000)
        

  
  
  var backgroundReady = false;
  var backgroundImage = new Image();
  backgroundImage.onload = function () {
  backgroundReady = true;
  };
  backgroundImage.src = "imgs/keskusta1.tiff";

    
//Nappulat
  function button(text, line, x, y){
      this.text = text;
      this.line = line;
      this.x = x;
      this.y = y;
  }
    
    
    
// Nappuloiden kuvat
  var buReady = false;
  var buImage = new Image();
  buImage.onload = function () {
  buReady = true;
  };
  buImage.src = "imgs/green.png";
    
  var newGame = new button("Uusi peli", 0, 256 + 20 , height + 18);

  var newEnemy = new button("Uusi vihollinen", 0, 512 + 30, height + 18);
  
  var buttons = [newGame, newEnemy];
    
    
        
  //Sprite
  function sprite (options, b) {
    var that = {};
    frameIndex = b.line;			
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.render = function (b) {
        that.context.drawImage(
           that.image,
           0,
           frameIndex * that.height / 2,
           that.width,
           that.height / 2,
           b.x,
           b.y,
           that.width,
           that.height / 2);
    };
    return that;
}
    
    

  
    
//Hiiren sijainti
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
 
//Näppäinten painaminen
  var keysDown = {};
    
function buttonPressed(x,y){
    for(k = 0; k < buttons.length; k++){
        var b = buttons[k];
        if(x < b.x + 256 && x > b.x && y < b.y + 128 && y > b.y){
            b.line = 1;
            switch(b.text){
                case "Uusi peli":
                    pReset();
                    eReset();
                    break;
                case "Uusi vihollinen":
                    addEnemy();
                    break;
                    
           }
        }
    }
}    
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });

  window.addEventListener("keydown",function(e){
      if([37,38,39,40].indexOf(e.keyCode)>-1){
          e.preventDefault();
      };
  });
  canvas.addEventListener("mousedown", function(e){
     removeEnemy(getMousePosition(canvas,e).x, getMousePosition(canvas,e).y);
     buttonPressed(getMousePosition(canvas,e).x, getMousePosition(canvas,e).y);
  })
  canvas.addEventListener("mouseup", function(e){
      for(i = 0; i < buttons.length; i ++){
          buttons[i].line = 0;
      }
  })
  

    
var render = function() {

  if (backgroundReady) {
		ctx.drawImage(backgroundImage, 0, 0);
	}
  ctx.fillStyle = '#66ff66';
  
  drawPlayer(ctx, keysDown);
  drawEnemies(ctx);
  ctx.fillRect(0, height, windowWidth, 100);
  if(buReady){
      for(k = 0; k < buttons.length; k++) {
          var bu = buttons[k];
          var buttonSprite = sprite({
            context: ctx,
            width: 256,
            height: 128,
            image: buImage   
        }, bu);
        buttonSprite.render(bu); 
        ctx.fillStyle = '#006600';
        ctx.font = "40px Sans Serif";
        ctx.fillText(bu.text, bu.x + 27, bu.y + 45, 200);
      } 
  }
};

    
    
//Update
var update = function(delta) {
    if (38 in keysDown) {
       movePlayer("up");
    } 
    if (40 in keysDown) {
       movePlayer("down");
    }
    if (37 in keysDown) {
      movePlayer("left");
    }
    if (39 in keysDown) {
      movePlayer("right");
    }
    moveEnemies()
};

//Animation
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};
  
var then = Date.now();
main();
  
});