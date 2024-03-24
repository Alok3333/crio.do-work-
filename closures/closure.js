let cntBtnInc = document.getElementById("cntInc");
let cntBtnDec = document.getElementById("cntDec");
let incrementEle = document.getElementById("incrementEle");

function counter() {
    let count = 0;
    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        }
    }
};

let countObj = counter();

// click on addeventListener to increment count
cntBtnInc.addEventListener("click", function () {
    let currentCntInc = countObj.increment();
    incrementEle.textContent = currentCntInc;
});

// click on addeventListener to decrement count
cntBtnDec.addEventListener("click", function () {
    let currentCntDec = countObj.decrement();
    incrementEle.textContent = currentCntDec;
});

function changeBg() {
    document.body.style.backgroundColor = "lightblue";
};

function removeBg() {
    document.body.style.backgroundColor = "";
};