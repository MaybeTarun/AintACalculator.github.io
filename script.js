const pun = document.querySelector(".pun");
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
];

function updateText() {
    var randomNumber = Math.floor(Math.random() * puns.length);
    var newText = puns[randomNumber];
    pun.textContent = newText;
};

window.onload = function() {
    setInterval(updateText, 10000);
};

var checkbox = document.getElementById('checkboxInput');
const count = document.querySelector(".count");

let eq = "";
document.querySelector('.inp').value = eq;
let btn = document.querySelectorAll(".btns");

function handleButtonClick(e) {
    if (e.target.innerHTML == '=') {
        var rand = Math.floor(Math.random() * puns.length);
        document.querySelector('.inp').value = rand;
    } else if (e.target.innerHTML == 'AC') {
        eq = '';
        document.querySelector('.inp').value = eq;
    } else {
        eq = eq + e.target.innerHTML;
        document.querySelector('.inp').value = eq;
    }
}

function handleButtonClickForCalc(e) {
    if (e.target.innerHTML == '=') {
        eq = eval(eq);
        document.querySelector('.inp').value = eq;
    } else if (e.target.innerHTML == 'AC') {
        eq = '';
        document.querySelector('.inp').value = eq;
    } else {
        eq = eq + e.target.innerHTML;
        document.querySelector('.inp').value = eq;
    }
}

Array.from(btn).forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        count.textContent = "Now You can Count on Me";
        eq = "";
        document.querySelector('.inp').value = eq;
        Array.from(btn).forEach((button) => {
            button.removeEventListener("click", handleButtonClick);
            button.addEventListener("click", handleButtonClickForCalc);
        });
        togglePopup();
    } else {
        count.textContent = "Don't Count on Me";
        eq = "";
        document.querySelector('.inp').value = eq;
        Array.from(btn).forEach((button) => {
            button.removeEventListener("click", handleButtonClickForCalc);
            button.addEventListener("click", handleButtonClick);
        });
    }
});

function togglePopup() {
    document.getElementById("popup").classList.toggle("active");
}

let incorrectAttempts = 0;

function checkAnswer() {
    const question = document.querySelector("#popup .content p").textContent;
    const userAnswer = document.querySelector("#popup input").value;

    const [num1, num2] = question.split(" + ").map(Number);
    const correctAnswer = num1 + num2;

    if (parseInt(userAnswer) === correctAnswer) {
        togglePopup();
        incorrectAttempts = 0;
        document.querySelector('.popin').value = '';
    } else {
        incorrectAttempts += 1;
        shakePopup();
        if (incorrectAttempts >= 3) {
            document.querySelector('.popin').value = '';
            location.reload();
        }
    }
}

const popup = document.getElementById("popup");
const popin = document.getElementById("popin");

popup.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && event.target === popin) {
    checkAnswer();
  }
});


function shakePopup() {
    popin.classList.add("shake");
    setTimeout(() => {
        popin.classList.remove("shake");
    }, 500);
}

document.querySelector("#popup button[type='submit']").addEventListener("click", checkAnswer);

function checkPageReload() {
    if (sessionStorage.getItem("isChecked") === null) {
      sessionStorage.setItem("isChecked", true);
    } else {
      checkbox.checked = false;
      document.querySelector('.popin').value = '';
    }
  }
  
  window.onload = checkPageReload;
  
function generateEquation() {
const num1 = Math.floor(Math.random() * 900) + 100;
const num2 = Math.floor(Math.random() * 900) + 100;

const questionElement = document.querySelector(".popup .content p");
questionElement.textContent = `${num1} + ${num2}`;
}

checkbox.addEventListener("change", function() {
if (checkbox.checked) {
    generateEquation();
}
});

generateEquation();
