
let slider = document.querySelector("#slider");
let button = document.querySelector("#generate_btn");

let caracterValue = document.querySelector("#qtde_caracters");
let password = document.querySelector("#password");
let radioAll = document.querySelector("#tudo");
let radioLetters = document.querySelector("#letters");
let radioNumbers = document.querySelector("#numbers");
let radioSymbols = document.querySelector("#symbols");

let passwordArea = document.querySelector(".password_area");

let charOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@?/_-#$*:;";
let charOptionsLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charOptionsNumbers = "0123456789";
let charOptionsSymbols = "!@?/_-#$*:;=%™[](){}";
let generatedPassword = "";

caracterValue.innerHTML = slider.value;

slider.oninput = function() {
  caracterValue.innerHTML = this.value;
}

const passwordGenerate = () => {
  let pass = "";
  
  if (radioAll.checked == true) {
    for (let i = 0, n = charOptions.length; i < slider.value; i++) {
      pass += charOptions.charAt(Math.floor(Math.random() * n));
    }
  } else if (radioLetters.checked == true) {
    for (let i = 0, n = charOptionsLetters.length; i < slider.value; i++) {
      pass += charOptionsLetters.charAt(Math.floor(Math.random() * n));
    }
  } else if (radioNumbers.checked == true) {
    for (let i = 0, n = charOptionsNumbers.length; i < slider.value; i++) {
      pass += charOptionsNumbers.charAt(Math.floor(Math.random() * n));
    }
  } else if (radioSymbols.checked == true) {
    for (let i = 0, n = charOptionsSymbols.length; i < slider.value; i++) {
      pass += charOptionsSymbols.charAt(Math.floor(Math.random() * n));
    }
  }
  
  passwordArea.classList.remove("hide");
  password.innerHTML = pass;
  generatedPassword = pass;
}

const copyPassword = () => {
  alert("A senha foi copiada com êxito!");
  const el = document.createElement('textarea');
  el.value = generatedPassword;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

button.addEventListener("click", passwordGenerate);
passwordArea.addEventListener("click", copyPassword);