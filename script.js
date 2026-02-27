let cookieBtn = document.getElementById("cookie");
let counterDisplay = document.getElementById("counter");
let grandmotherBtn = document.getElementById("item-1");
let cpsDisplay = document.getElementById("cps");
let bakerBtn = document.getElementById("item-2");
let factoryBtn = document.getElementById("item-3");

let cookieCount = 0;
counterDisplay.textContent = cookieCount;

let cookiesPerSecond = 0;

// Button actions
cookieBtn.addEventListener("click", function(){
    cookieCount++;
    counterDisplay.textContent = cookieCount;
})
grandmotherBtn.addEventListener("click", function(){
    if(cookieCount >= 100){
        cookieCount = cookieCount - 100;
        counterDisplay.textContent = cookieCount;

        cookiesPerSecond++;
        cpsDisplay.innerText = `${cookiesPerSecond}/S`;
    } else {
        alert("Not enough cookies!");
    }
})
bakerBtn.addEventListener("click", function(){
    if(cookieCount >= 500){
        cookieCount = cookieCount - 500;
        counterDisplay.textContent = cookieCount;

        cookiesPerSecond+= 12;
        cpsDisplay.innerText = `${cookiesPerSecond}/S`;
    } else {
        alert("Not enough cookies!");
    }
})
factoryBtn.addEventListener("click", function(){
    if(cookieCount >= 5000){
        cookieCount = cookieCount - 5000;
        counterDisplay.textContent = cookieCount;

        cookiesPerSecond+= 100;
        cpsDisplay.innerText = `${cookiesPerSecond}/S`;
    } else {
        alert("Not enough cookies!");
    }
})

// counter interval
setInterval(function(){
    cookieCount = cookieCount + cookiesPerSecond;
    counterDisplay.textContent = cookieCount;
}, 1000)