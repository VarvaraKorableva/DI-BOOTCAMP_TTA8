import {authorize} from './api.js'

const form = document.getElementById('login')

function handleSubmit(userData) {
    authorize(userData)
    .then((res) => {
        console.log(res);
        const message = document.getElementById('message');
        message.textContent = `Hi ${userData.username} welcom back again!`;
    })
    .catch((err) => {
        console.log(err);
        const message = document.getElementById('message');
        message.textContent = err;
    });
}

function handleLoginBtnClick(e) {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const userData = {
        username: username,
        password: password,
    };

    handleSubmit(userData)
}

form.addEventListener('submit', handleLoginBtnClick)