const upperLetters = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()+?><:{}[]";

const upperEl = document.querySelector("#uppercase");
const lowerEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolsEl = document.querySelector("#symbols");
const lengthEl = document.querySelector("#length");

const passwordEl = document.querySelector(".password");

function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getlowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPassword() {
	let len = lengthEl.value;

	let passwordGenerated = "";

	if (upperEl.checked) {
		passwordGenerated += getUppercase();
	}

	if (lowerEl.checked) {
		passwordGenerated += getlowercase();
	}
	if (numberEl.checked) {
		passwordGenerated += getNumbers();
	}
	if (symbolsEl.checked) {
		passwordGenerated += getSymbols();
	}

	for (let i = passwordGenerated.length; i < len; i++) {
		let password = generatePassword();

		passwordGenerated += password;
	}

	if (
		!upperEl.checked &&
		!lowerEl.checked &&
		!numberEl.checked &&
		!symbolsEl.checked
	) {
		passwordGenerated = "";
	}

	passwordEl.textContent = passwordGenerated;
}

function generatePassword() {
	const password = [];

	if (upperEl.checked) {
		password.push(getUppercase());
	}
	if (lowerEl.checked) {
		password.push(getlowercase());
	}
	if (numberEl.checked) {
		password.push(getNumbers());
	}
	if (symbolsEl.checked) {
		password.push(getSymbols());
	}

	return password[Math.floor(Math.random() * password.length)];
}
