var count=0;
var timer;
function timecount(){
    count++;
    Counting.innerHTML = count;
}
function Start(){
  timer= setInterval(timecount,500);
}
function Stop(){
  clearInterval(timer);
}
function Reset(){
  clearInterval(timer);
  Counting.innerHTML ="0";
  count = 0;
}


// var count=0;
// var timer;
// function timecount(){
//     count++;
//     l1.innerHTML = count;

//     if(count === 15){
//     clearInterval(timer);
//     alert("Game over!")
// }
// }
// function myfun1(){
//   timer= setInterval(timecount,500);
// }
// function myfun2(){
//   clearInterval(timer);
// }
// function myfun3(){
//   clearInterval(timer);
//   l1.innerHTML ="0";
//   count =0;
// }