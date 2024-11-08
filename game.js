let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message")
const usersc= document.querySelector("#you");
const comsc= document.querySelector("#comp");
const drawgame=()=>{
    
    msg.innerText="draw game";
    msg.style.backgroundColor="black";
}
const gen_comchoice=()=>{
    const options=["rock","paper","scissors"];
   const remdomindex=Math.floor(Math.random()*3)
   return options[remdomindex];
}
const showwinner=(userwin,userchoice,comchoice)=>{
     if(userwin){
        userscore++;
        usersc.innerText=userscore;
        msg.innerText=`You win ! your ${userchoice} beats ${userchoice} `;
        msg.style.backgroundColor="green";

     }else{
        comscore++;
        comsc.innerText=comscore;
        msg.innerText=`You lose !${userchoice} beats your  ${userchoice} `;
        msg.style.backgroundColor="red";
     }
}
const playgame=(userchoice)=>{
    
    const comchoice= gen_comchoice();
    
     if(userchoice===comchoice){
         drawgame();
     }
     else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comchoice=="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin=comchoice=="scissors"? false : true;
        }
        else{
            userwin=comchoice==="rock"? false : true;
        }
        showwinner(userwin,userchoice,comchoice);
     }
}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    });
});


