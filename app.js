let passwordDisplay = document.getElementById('password-display');
let passwordLength = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('upper');
const symbolCheckbox = document.getElementById('symbols');
const numberCheckbox = document.getElementById('numbers');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
let smallerLetters = 'abcdefghijklmnopqrstuvwxyz';
let bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let symbols = '!@#$%&*()_+=';
let numbers = '0123456789';

generateButton.addEventListener('click', () => {
    if (passwordLength.value === '') alert('Choose password length');
    
    let newPassword = [];
    for (let i = 0; i < passwordLength.value; i++) {
        if (newPassword.length < passwordLength.value) newPassword.push(getSmallLetter());
        
        if (uppercaseCheckbox.checked) {
            if (newPassword.length < passwordLength.value) newPassword.push(getBigLetter());
        }

        if (symbolCheckbox.checked) {
            if (newPassword.length < passwordLength.value) newPassword.push(getSymbol());
        }

        if (numberCheckbox.checked) {
            if (newPassword.length < passwordLength.value) newPassword.push(getNumber());
        }
    }
    newPassword = newPassword.join('');
    passwordDisplay.textContent = newPassword;
    
});

function getSmallLetter() {
    return smallerLetters[Math.floor(Math.random() * smallerLetters.length)];
}

function getBigLetter() {
    return bigLetters[Math.floor(Math.random() * bigLetters.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

copyButton.addEventListener('click', () => {
    if (passwordDisplay.textContent === '') return;
    
    navigator.clipboard.writeText(passwordDisplay.textContent);
    alert('Password copied');
});