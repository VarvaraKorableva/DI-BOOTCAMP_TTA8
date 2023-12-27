//Retrieve the form and console.log it.
const form = document.getElementsByTagName('form')[0]
console.log(form)

//Retrieve the inputs by their id and console.log them.
const inputFname = document.getElementById('fname')
const inputLname = document.getElementById('lname')
const inputSubmit = document.getElementById('submit')

console.log(inputFname, inputLname, inputSubmit)

//Retrieve the inputs by their name attribute and console.log them.
const inputFirstName = document.getElementsByName('firstname')
const inputLastName = document.getElementsByName('lastname')
const inputSubmitAtribute = document.querySelector('input[value="Submit"]');

console.log(inputFirstName, inputLastName, inputSubmitAtribute)

/*
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>
*/

const firstNameValue = inputFname.value
const lastNameValue = inputLname.value

const ul = document.getElementsByTagName('ul')[0]

function handleSubmit(e) {
    e.preventDefault()
    const firstNameValue = inputFname.value
    const lastNameValue = inputLname.value
    const ul = document.getElementsByTagName('ul')[0]

    if (firstNameValue.trim() !== '' && lastNameValue.trim() !== '') {
        let arr = [firstNameValue, lastNameValue]
        for (i of arr) {
            const li = document.createElement('li')
            const textLi = document.createTextNode(i)
            li.appendChild(textLi)
            ul.appendChild(li)
        }
    }else {
        console.log('You need to add your first and last name')
    }
}

inputSubmit.addEventListener('click', handleSubmit)