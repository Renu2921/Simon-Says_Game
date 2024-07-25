let gameSeq=[];
let userseq=[];
let button=["pink","blue","yellow","skyBlue"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let highScore=0;


document.addEventListener("keypress",()=>{
   if(started==false){
    // console.log("key is pressed");
    started=true;
   }
   levelUp();
})


function btnFlash(btns){
    btns.classList.add("btnFlash");
    setTimeout(()=>{
        btns.classList.remove("btnFlash");
    },250)
    
}

function levelUp(){
    userseq=[];      //************************************** */
    level++;
  h2.innerText=`Level ${level}`;
  
 //randon btn by system
 let randomIdx=Math.floor(Math.random()*4);
 let randomColor= button[randomIdx];
 let randomBtn=document.querySelector(`.${randomColor}`);
 gameSeq.push(randomColor);
 console.log(gameSeq);

 btnFlash(randomBtn);

}

function userPress(){
    // console.log("button is pressed");
    // console.log(this);
    let btnss=this;
    btnFlash(btnss); 
    
    let userColor=btnss.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    // console.log(userseq);
    checkAns(userseq.length-1);
     
}

let buttons=document.querySelectorAll(".btns");
for(let but of buttons){
    but.addEventListener("click",userPress)
}

function checkAns(idx){
    // console.log(`current level: ${level}`);
    // let idx=level-1;
    if(userseq[idx]==gameSeq[idx]){     //if we adds same value then game proceed
        // console.log("same value");
        if(userseq.length==gameSeq.length){    //when lastvalue of both sequence matches then level up function is czllled in that case the user seq is empty but gameseq have all values
            setTimeout(levelUp,1000);   
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#d2d2d2";
        },300);
        
         if(level>highScore){
            highScore=level;
         }
        displayHighScore();
        reset();
         
       
    }
};
  function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
  }

  function displayHighScore(){
    let h3=document.createElement("h3");
        h3.innerText=`High Score is ${highScore}`;
        h2.append(h3);
        
  }


 

