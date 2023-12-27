/*function winBattle(){
    return true;
}

Transform the winBattle() function to an arrow function.
Create a variable called experiencePoints.
Assign to this variable, a ternary operator. 
If winBattle() is true, the experiencePoints variable should be equal to 10, 
else the variable should be equal to 1.
Console.log the experiencePoints variable.*/

const winBattle = () => true

let experiencePoints = winBattle? 10 : 1

console.log(experiencePoints)

/*
Exercise 3 : Is It A String ?
Instructions
Write a JavaScript arrow function that checks whether 
the value of the argument passed, is a string or not. 
The function should return true or false
*/
const isString = (value) => (typeof value === 'string') ? true : false;

console.log(isString(['hj']))

/*
Exercise 4 : Find The Sum
Instructions
Create a one line function (ie. an arrow function) that 
receives two numbers as parameters and returns the sum.
*/

const sum = (a, b) => a + b

/*
Exercise 5 : Kg And Grams
Instructions
Create a function that receives a weight in kilograms 
and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference 
between function declaration and function expression.
Finally, use a one line arrow function and invoke it.
*/

function transfromKg(kg) {
    return kg * 1000
}

console.log(transfromKg(1))

const transToGrams = kg => kg * 1000

//console.log(transToGrams(2))

//you can invoke function declaration before you declarate it, but you can't do it with function expression

/*
Exercise 6 : Fortune Teller
Instructions
Create a self invoking function that takes 4 arguments: 
number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like 
"You will be a <job title> in <geographic location>, and married to 
<partner's name> with <number of children> kids."
*/

(function(number, name, location, job) {
    let message = `You will be a ${job} in ${location}, and married to ${name} with ${number} kids.`
    document.body.textContent = message;
})(4,'Peter', 'Paris', 'developer')

/*
Exercise 7 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Navbar in your HTML file.
In your js file, create a self invoking funtion that 
takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying 
the name of the user and his profile picture.
*/
/*
const button = document.getElementsByTagName('button')[0]
const onSignin = (name) => {
    const nav = document.getElementsByTagName('nav')[0]
    const button = document.getElementsByTagName('button')[0]
    nav.removeChild(button);

    let greetings = document.createElement('р3') 
    let textNode = document.createTextNode(`Hello, ${name}`);
    greetings.appendChild(textNode);
    document.body.appendChild(greetings)
    //let pic = document.createElement('img') 
}

button.addEventListener('click', onSignin)*/

(function(name){
    const nav = document.getElementsByTagName('nav')[0]
    const button = document.getElementsByTagName('button')[0]
    nav.removeChild(button);

    let greetings = document.createElement('р3') 
    let textNode = document.createTextNode(`Hello, ${name}`)
    greetings.appendChild(textNode)
    greetings.className = 'greetings'
    nav.appendChild(greetings)

    const imgElement = document.createElement('img')
    imgElement.src = 'https://plus.unsplash.com/premium_photo-1668534110420-13105a62444d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8'
    imgElement.className = 'img'
    nav.appendChild(imgElement);

})('Peter')