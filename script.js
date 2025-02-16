usersqu=[];
gamesqu=[];
colors=[".green",".red",".blue",".orange"]
started=false;
level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});

let h3=document.querySelector("h3");

function levelup(){
    usersqu=[];
    level++;
    h3.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=colors[randidx];
    let randbtn=document.querySelector(randcolor);
    gamesqu.push(randcolor)
    btnflash(randbtn);
}

function btnflash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(function(){
        randbtn.classList.remove("flash");
    },250);
}

let btnlist=document.querySelectorAll(".btn");
for(btn of btnlist){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn=this;
    userflash(btn);
    let btnid=btn.getAttribute("id");
    usersqu.push(`.${btnid}`);
    checkans(usersqu.length-1);
}

function userflash(btn){
    btn.classList.add("grayflash");
    setTimeout(function(){
        btn.classList.remove("grayflash");
    },250);
}

function checkans(idx){
    if(usersqu[idx]===gamesqu[idx]){
        if(usersqu.length===gamesqu.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML=`Game over! Your score is <b>${level}</b> <br> press any key to start.`;
        reset();
    }
}

function reset(){
    started=false;
    gamesqu=[];
    usersqu=[];
    level=0;
}