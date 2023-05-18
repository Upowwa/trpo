let password = document.querySelector(".password");
let small = document.querySelector(".small");
let capital = document.querySelector(".capital");
let simbol = document.querySelector(".simbol");
let number = document.querySelector(".number");

let isSmal = false;
let isCapital = false;
let isSimbol = false;
let isNumber = false;
let isHasTrueCheckbox = false;

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
  
function Copied_function(element) {
    let copyText = element.textContent;
    navigator.clipboard
        .writeText(copyText)
        .then((text) => {
    
        })
        .catch((err) => {
        
            console.log("Error", err);
        });
}

var input = document.getElementById('run');
var list = document.getElementById('list');
var wrapper = document.getElementById('big');

function generate() {
  isTrueCheckbox();
  var x = myRange.value;
  if (isHasTrueCheckbox === true) {
    password.textContent = '';
    input.addEventListener('click',function(event){
        event.preventDefault();
        list.style.display = 'block';
        wrapper.style.display = 'none';
    });
  }
  for (var j = 0; j < x; j++) gen_pass();
}