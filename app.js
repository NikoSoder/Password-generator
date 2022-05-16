let passwordDisplay = document.getElementById('password-display');
let passwordLength = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('upper');
const symbolCheckbox = document.getElementById('symbols');
const numberCheckbox = document.getElementById('numbers');
const generateButton = document.querySelector('button');
let smallerLetters = 'abcdefghijklmnopqrstuvwxyz';
let bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let symbols = '!@#$%&*()_+=';
let numbers = '0123456789';

generateButton.addEventListener('click', () => {
    if (passwordLength.value === '') alert('Choose password length');
    
    let newPassword = [];
    for (let i = 0; i < passwordLength.value; i++) {
        newPassword.push(getSmallLetter());
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