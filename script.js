const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|{}[],.><:;/-=''";
const allChar = upperCase + lowerCase + numbers + symbols;
const passwordBox = document.getElementById("password");
document.getElementById("passwordBtn").addEventListener("click", function () {
    let password = "";
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (password.length < length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
});
document.getElementById("copyBtn").addEventListener("click", function () {
    let textField = passwordBox.value;

    if (textField === "") {
        alert("Generate password to copy");
    } else {
        passwordBox.select();
        document.execCommand("copy");
        alert("Password copied to clipboard")    
    }
});

document.getElementById('time').innerText = new Date;