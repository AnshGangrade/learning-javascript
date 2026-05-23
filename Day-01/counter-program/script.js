let count = 0;
let btn = document.getElementById("counter");

document.getElementsByClassName("decrement")[0].onclick = function(){
    count--;
    btn.textContent = count;
}
document.getElementsByClassName("increment")[0].onclick = function(){
    count++;
    btn.textContent = count;
}
document.getElementsByClassName("reset")[0].onclick = function(){
    count = 0;
    btn.textContent = count;
}