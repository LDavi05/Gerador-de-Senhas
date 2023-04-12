
let slider = document.querySelector("#slider");
let button = document.querySelector("#generate_btn");

let caracterValue = document.querySelector("#qtde_caracters");
let password = document.querySelector("#password");

let passwordArea = document.querySelector(".password_area");

let charOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let generatedPassword = "";

caracterValue.innerHTML = slider.value;

slider.oninput = function() {
  caracterValue.innerHTML = this.value;
}

const passwordGenerate = () => {
  let pass = "";
  
  for (let i = 0, n = charOptions.length; i < slider.value; i++) {
    pass += charOptions.charAt(Math.floor(Math.random() * n));
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
