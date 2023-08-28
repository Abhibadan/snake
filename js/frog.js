let frogX;
let frogY;
let frogFlag=0;
const render_frog= setInterval(()=>{
    if(frogFlag==0){
        frogX=Math.floor(Math.random() * 50);
        frogY=Math.floor(Math.random() * 50);
        let frog=document.createElement("div");
        frog.id="frog";
        document.getElementById("board").appendChild(frog);
        frog.style.gridColumnStart=frogX;
        frog.style.gridRowStart=frogY;
        frogFlag=1;
    }
},5000);
