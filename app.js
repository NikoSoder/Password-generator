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