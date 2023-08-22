function eat(){
        if(frogFlag==1 && frogX==snake_body[0].x && frogY==snake_body[0].y){
            console.log("eat");
            document.getElementById("board").removeChild(document.getElementById("frog"));
            frogFlag=0;
            let generate_snake=document.createElement("div");
            generate_snake.className="snake";
            document.getElementById("board").appendChild(generate_snake);
            score+=10;
            document.getElementById("score").innerText=`score- ${score}`;
            return true;
        }
        else{
            for (let i = 1; i < snake.length; i++) {
                if(snake_body[0].x==snake_body[i].x && snake_body[0].y==snake_body[i].y){
                    while (document.getElementById("board").firstChild) {
                        document.getElementById("board").removeChild(document.getElementById("board").firstChild);
                    }
                    frogFlag=1;
                    document.getElementById("board").style.backgroundColor="rgb(22, 1, 1)";
                    document.getElementById("board").style.border="10px solid  rgb(255,0,0)";
                    document.getElementById("board").insertAdjacentHTML("beforeend", "<h class='warning'>GAME&nbsp;OVER</h>");
                    document.getElementById("board").insertAdjacentText("beforeend", document.getElementById("score").innerText);
                    document.getElementById("score").innerText='';
                    setTimeout(()=>{
                        
                        location.reload();
                    },5000)
                }
            }
            return false;
        }
}