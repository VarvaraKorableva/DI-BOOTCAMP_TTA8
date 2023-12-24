
//Exercise 1 : List Of People

//Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"]
people.shift()

//Write code to replace “James” to “Jason”
const elementIndex = people.indexOf("James")
people[elementIndex] = 'Jason'

//Write code to add your name to the end of the people array.
people.push('Varvara')

//Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary"))

/*
Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
*/
const copyPeopleArr = people.slice(0, people.length - 1)

//Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf('Foo'))
//this means that the element 'Foo' was not found in the people array.

/*Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?*/

const last = people[people.length - 1]
//the index of the last element is the length of the array, but minus 1


//Part II - Loops

//Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

/*
Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.
*/

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] === 'Devon')
    break
}

//Exercise 2 : Your Favorite Colors
/*
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus*/

const colors = ['red', 'blue', 'purpal', 'black', 'green']
const suffixes = ['st', 'nd', 'rd', 'th']

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i} choice is ${colors[i]}`)
}

for (let i = 0; i < colors.length; i++) { 
    if (i < 3) {
        let suffixIndex = i
        console.log(`My ${i+1}${suffixes[suffixIndex]} choice is ${colors[i]}`)
    } else {
        let suffixIndex = 3
        console.log(`My ${i+1}${suffixes[suffixIndex]} choice is ${colors[i]}`)
    }
}

//Exercise 3 : Repeat The Question
/*
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/
/*
let userInput;
let flag = true

do {
  userInput = prompt('Please enter a number:');

  if (userInput === 'exit') {
    flag = false
    break;
  }

  if (isNaN(userInput)) {
    console.log('You need to enter only numbers.');
  } else if (userInput >= 10) {
    console.log('Your number is more than or equal to 10');
  }

} while (flag);*/

//Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building
console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`Second tenant is${building.nameOfTenants[1]}, he has ${building.numberOfRoomsAndRent['dan'][0]} rooms in his apartment`)

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if ((building.numberOfRoomsAndRent['sarah'][1] + building.numberOfRoomsAndRent['david'][1]) > building.numberOfRoomsAndRent['dan'][1]) {
    building.numberOfRoomsAndRent['dan'][1] = 1200
}

//Exercise 5 : Family
/*
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.*/

family = {
    grandmother: 'Natasha',
    grandfather: 'Sergei',
    mother: 'Varvara', 
    father: 'ilya',
    son: 'Maxim'
}

let keys = []
let values = []

for(key in family) {
    keys.push(key)
    values.push(family[key])
}

console.log(keys)
console.log(values)

//Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”#
let messageArr = []

for(key in details) {
    messageArr.push(key)
    messageArr.push(details[key])
}

const message = messageArr.join(' ')
console.log(message)

//Exercise 7 : Secret Group
/*
A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let myString = ''

for(i in names) {
    myString += names[i][0]
}

console.log(myString)