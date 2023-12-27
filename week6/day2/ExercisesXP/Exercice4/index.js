/*Write a JavaScript program to calculate the volume of a sphere. 
Use the code below as a base:*/

function volumefunc(e) {
    e.preventDefault()
    const radius = parseFloat(document.getElementById('radius').value)
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

    document.getElementById('volume').value = volume.toFixed(2)
}

const myForm = document.getElementById('MyForm')
myForm.addEventListener('submit', volumefunc)