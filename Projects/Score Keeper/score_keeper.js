var gameOver= false;

var limited =document.querySelector("#limit");
var input =document.querySelector("input");
input.value=5;
input.addEventListener("change",function(){
    limited.textContent= input.value;
});

var p1= document.querySelector("#p1");
var p2= document.querySelector("#p2");
var inc1= document.querySelector("#count1");
inc1=0;
var inc2= document.querySelector("#count2");
inc2=0;
p1.addEventListener("click",function(){
    if(!gameOver){
        inc1++;
        if(inc1>=input.value){
            count1.classList.add("color");
            gameOver= true;
        }
        count1.textContent= inc1;
    }
});
 p2.addEventListener("click",function(){
    if(!gameOver){
        inc2++;
        if(inc2>=input.value){
            count2.classList.add("color");
            gameOver= true;
        }
        count2.textContent= inc2;
    }
});
var reset= document.querySelector("#reset")
reset.addEventListener("click", function(){
    gameOver= false;
    input.value=5;
    inc1=0;
    inc2=0;
    count1.textContent=0;
    count2.textContent=0;
    limited.textContent= input.value;
    count1.classList.remove("color");
    count2.classList.remove("color");
});





