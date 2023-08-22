    var snake=document.getElementsByClassName("snake");
    var snake_body=[{x:10,y:10},{x:9,y:10},{x:8,y:10}];
    for (let i = 0; i < snake.length; i++) {
        snake[i].style.gridColumnStart=snake_body[i].x;
        snake[i].style.gridRowStart=snake_body[i].y;

    }
    let score=0;
    let temp;
    let l=0;
    let t=0;
    var rightmove;
    var downmove;
    var setH=0;
    var setV=0;
    document.addEventListener('keydown',(e)=>{
        if(e.key=="ArrowRight"){
            if(setH==0){
                rightmove= setInterval(()=>{
                    l=snake_body[0].x;
                    t=snake_body[0].y;
                    if(l<50){
                        l+=1;
                    }else{
                        l=0;
                    }
                    temp={x:l,y:t};
                    snake_body.unshift(temp);
                    if(!eat()){
                        snake_body.pop();
                    }
                    for (let i = 0; i < snake.length; i++) {
                        snake[i].style.gridColumnStart=snake_body[i].x;
                        snake[i].style.gridRowStart=snake_body[i].y;
        
                    }
                },100);
                setH=1;
                if(typeof downmove != 'undefined'){
                    clearInterval(downmove);
                    setV=0;
                }
            }
        }
        else if(e.key=="ArrowDown"){
            if(setV==0){
                downmove= setInterval(() => {
                    l = snake_body[0].x;
                    t = snake_body[0].y;
                    if (t < 50) {
                        t += 1;
                    } else {
                        t = 0;
                    }
                    temp = { x: l, y: t };
                    snake_body.unshift(temp);
                    if(!eat()){
                        snake_body.pop();
                    }
                    for (let i = 0; i < snake.length; i++) {
                        snake[i].style.gridColumnStart = snake_body[i].x;
                        snake[i].style.gridRowStart = snake_body[i].y;

                    }
                }, 100);
                setV=1;
                if(typeof rightmove != 'undefined'){
                    clearInterval(rightmove);
                    setH=0;
                }
            }
        }
        else if(e.key=="ArrowLeft"){
            if(setH==0){
                rightmove=setInterval(() => {
                    l = snake_body[0].x;
                    t = snake_body[0].y;
                    if (l > 0) {
                        l -= 1;
                    } else {
                        l = 50;
                    }
                    temp = { x: l, y: t };
                    snake_body.unshift(temp);
                    if(!eat()){
                        snake_body.pop();
                    }
                    for (let i = 0; i < snake.length; i++) {
                        snake[i].style.gridColumnStart = snake_body[i].x;
                        snake[i].style.gridRowStart = snake_body[i].y;
                    }
                }, 100);
                setH=1;
                if(typeof downmove != 'undefined'){
                    clearInterval(downmove);
                    setV=0;
                }
            }
        }
        else if(e.key=="ArrowUp"){
            if(setV==0){
                downmove=setInterval(() => {
                    l = snake_body[0].x;
                    t = snake_body[0].y;
                    if (t > 0) {
                        t -= 1;
                    } else {
                        t = 50;
                    }
                    temp = { x: l, y: t };
                    snake_body.unshift(temp);
                    if(!eat()){
                        snake_body.pop();
                    }
                    for (let i = 0; i < snake.length; i++) {
                        snake[i].style.gridColumnStart = snake_body[i].x;
                        snake[i].style.gridRowStart = snake_body[i].y;

                    }
                }, 100);
                setV=1;
                if(typeof rightmove != 'undefined'){
                    clearInterval(rightmove);
                    setH=0;
                }
            }
        }
    })