import { register } from './api.js';

const form = document.getElementById('registrationForm');

function handleSubmit(userData) {
    register(userData)
        .then((res) => {
            console.log(res);
            const message = document.getElementById('message');
            message.textContent = `${res}`;
        })
        .catch((err) => {
            console.log(err);
            const message = document.getElementById('message');
            message.textContent = err;

        });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const userData = {
        username: username,
        firstName: firstName,
        password: password,
        lastName: lastName,
        email: email,
    };

    handleSubmit(userData);
}

form.addEventListener('submit', handleFormSubmit);