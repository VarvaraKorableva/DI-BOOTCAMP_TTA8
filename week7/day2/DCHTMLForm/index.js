const btn = document.getElementById('btn');
const formValues = {};

function handleInput(e) {
    formValues[e.target.name] = e.target.value;
}

function handleClick() {
    const p = document.getElementById('json')
    p.textContent = JSON.stringify(formValues)
}

document.getElementById('name').addEventListener('input', handleInput);
document.getElementById('lastname').addEventListener('input', handleInput);
btn.addEventListener('click', handleClick);
