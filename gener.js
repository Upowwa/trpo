let range = document.querySelector(".passwordRange");
let password = document.querySelector(".password");
let small = document.querySelector(".small");
let capital = document.querySelector(".capital");
let simbol = document.querySelector(".simbol");
let number = document.querySelector(".number");

let Letters = [
    "a", "b", "c", "b", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]; 
let Simbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "/", ",", ".", "{", "}", "[", "]", ":", ";", "~", "`", "?",
];
  
small.addEventListener("change", () => {
    isSmal = !isSmal;
});
capital.addEventListener("change", () => {
    isCapital = !isCapital;
});
simbol.addEventListener("change", () => {
    isSimbol = !isSimbol;
});
number.addEventListener("change", () => {
    isNumber = !isNumber;
});

function isTrueCheckbox() {
    let checkboxes = [isSmal, isCapital, isNumber, isSimbol];
    if (checkboxes.includes(true)) {
      isHasTrueCheckbox = true;
    } else {
      isHasTrueCheckbox = false;
      alert("Выберите хотя один из вариантов");
    }
}

function gen_pass() {
    
    let passwordLength = range.value;
   
    let generatedPassword = "";
  
    let randik = 0;
  
    randik = Math.floor(Math.random() * 4 + 1);
    while (passwordLength > 0 && isHasTrueCheckbox === true) {
        if (randik == 1) {
            if (isNumber) {
                generatedPassword += Math.floor(Math.random() * 10);
                randik = Math.floor(Math.random() * 4 + 1);
                passwordLength--;
            } else {
                randik = Math.floor(Math.random() * 4 + 1);
            }
        }
        if (randik == 2) {
            if (isSmal) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Letters[amount];
                randik = Math.floor(Math.random() * 4 + 1);
                passwordLength--;
            } else {
                randik = Math.floor(Math.random() * 4 + 1);
            }
        }
        if (randik == 3) {
            if (isCapital) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Letters[amount].toUpperCase();
                randik = Math.floor(Math.random() * 4 + 1);
                passwordLength--;
            } else {
                randik = Math.floor(Math.random() * 4 + 1);
            }
        }
        if (randik == 4) {
            if (isSimbol) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Simbols[amount];
                randik = Math.floor(Math.random() * 4 + 1);
                passwordLength--;
            } else {
                randik = Math.floor(Math.random() * 4 + 1);
            }
        }
    }
    password.textContent += generatedPassword + "\n";
};

