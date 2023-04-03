

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const text = document.getElementById('text');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = text.value.trim();
	

	if (usernameValue === '') {
		setErrorFor(username, 'Enter username');
	} else {
		setSuccessFor(username);
	}
	if (emailValue === '') {
		setErrorFor(email, 'Enter email');
	} else {
		setSuccessFor(email);
	}
	if (phoneValue === '') {
		setErrorFor(phone, 'Enter phone number');
	} else {
		setSuccessFor(phone);
	}
	if (messageValue === '') {
		setErrorFor(text, 'Enter message');
	} else {
		setSuccessFor(text);
	}
	
	inputs.forEach((input) => {
		input.addEventListener("focus",focusFunc);
		input.addEventListener("blur",blurFunc);
	});
	

}
function setErrorFor(input, message) {
	const inputContainer = input.parentElement;
	const small = inputContainer.querySelector('small');

	small.innerText = message;
	
	inputContainer.className = 'input-container error';
}

function setSuccessFor(input) {
	const inputContainer = input.parentElement;
	inputContainer.className = 'input-container success';
}



const inputs = document.querySelectorAll(".input");


function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode;
	
	if(this.value =="" ){
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus",focusFunc);
	input.addEventListener("blur",blurFunc);
});


