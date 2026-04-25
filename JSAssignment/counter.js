let btn = document.getElementById("incr");
let btn2 = document.getElementById("decr");
let btn3 = document.getElementById("reset");
let counter = document.getElementById("counter");

let count=0;

btn.addEventListener("click",()=>{
    count++;
    counter.textContent = count;
})

btn2.addEventListener("click",()=>{
    count--;
    counter.textContent = count;
})

btn3.addEventListener("click",()=>{
    count = 0;
    counter.textContent = count;
})
