let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "green", "purple"];
document.querySelector("document");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
let highScore = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        console.log("Game started!");

        setTimeout(levelUp, 250);
    }
})

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;
    highScore = Math.max(level, highScore);
    h4.innerText = `High Score is: ${highScore}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);


    flash(randBtn);
    gameSeq.push(randColor);
}

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", clickBtn);
}

function clickBtn() {
    let btn = this;
    flash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over. Your Score was <b>${level}</b>.Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);

        reset();
    }
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}