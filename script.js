const pun = document.querySelector(".pun")
var puns = [
    "The minus key on my calculator is broken, but on the plus side it still works.",
    "Got stopped by customs with a calculator, an exercise book, and a slide rule. Apparently they are instruments of maths instruction.",
    "Always trusted my calculator. I can count on it.",
    "Managed to get some engineering calculations wrong by using the wrong pencil. It wasn’t 2B.",
    "My calculator stopped working mid way through my engineering exam. I can’t count on it any more.",
    "Told the detective that it couldn’t have been me as I was using my calculator at the time of the crime. He said, “Well, that adds up”.",
    "“It’s what’s on the inside that counts”, I said as I explained the chipset of a calculator to a friend.",
    "Opened the post, and there’s a calculator, an abacus and a letter. Something just doesn’t add up.",
    "Was going to buy a pocket calculator, then realised I only had a few pockets and could count them myself.",
    "Farmer wanted to know how many were in his dairy herd, so he used a cowculator."
]

function updateText() {
    var randomNumber = Math.floor(Math.random() * puns.length);
    var newText = puns[randomNumber];
    pun.textContent = newText;
};
  
window.onload = function() {
    setInterval(updateText, 10000);
};

var checkbox = document.getElementById('checkboxInput');
const count = document.querySelector(".count")

let eq = "";
    document.querySelector('.inp').value = eq;
    let btn = document.querySelectorAll(".btns");
    Array.from(btn).forEach((button)=>{
        button.addEventListener("click",(e)=>{
            if (e.target.innerHTML == '=') {
                var rand = Math.floor(Math.random() * puns.length);
                document.querySelector('.inp').value = rand;
            }
            else if (e.target.innerHTML == 'AC') {
                eq = '';
                document.querySelector('.inp').value = eq;
            }
            else {
                eq = eq + e.target.innerHTML;
                document.querySelector('.inp').value = eq;
            }
        })
    })

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    count.textContent = "Now You can Count on Me";
    let eq = "";
    document.querySelector('.inp').value = eq;
    let btn = document.querySelectorAll(".btns");
    Array.from(btn).forEach((button)=>{
        button.addEventListener("click",(e)=>{
            if (e.target.innerHTML == '=') {
                eq = eval(eq);
                document.querySelector('.inp').value = eq;
            }
            else if (e.target.innerHTML == 'AC') {
                eq = '';
                document.querySelector('.inp').value = eq;
            }
            else {
                eq = eq + e.target.innerHTML;
                document.querySelector('.inp').value = eq;
            }
        })
    })
  } else {
    count.textContent = "Don't Count on Me";
    let eq = "";
    document.querySelector('.inp').value = eq;
    let btn = document.querySelectorAll(".btns");
    Array.from(btn).forEach((button)=>{
        button.addEventListener("click",(e)=>{
            if (e.target.innerHTML == '=') {
                var rand = Math.floor(Math.random() * puns.length);
                document.querySelector('.inp').value = rand;
            }
            else if (e.target.innerHTML == 'AC') {
                eq = '';
                document.querySelector('.inp').value = eq;
            }
            else {
                eq = eq + e.target.innerHTML;
                document.querySelector('.inp').value = eq;
            }
        })
    })
  }
});
