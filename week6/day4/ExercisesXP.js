/*Exercise 1 : Colors
Instructions
Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]

colors.forEach((item, index)=> {
    console.log(`${index+1}# choice is ${item}`)
})

/*
Exercise 2 : Colors #2
Instructions
Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
Write a JavaScript program that displays the colors in the following order : 
“1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.
*/

const colorsTwo = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
const ordinal = ["th","st","nd","rd"]

colorsTwo.forEach((item, index) => {
    const suffix = (index + 1 <= 3) ? ordinal[index + 1] : ordinal[0]
    console.log(`${index + 1}${suffix} choice is ${item}.`)
});

/*
Exercise 3 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ?
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//['bread', "carrot", "potato", 'chicken', "apple", "orange"]

------2------
const country = "USA";
console.log([...country]);

//[ 'U', 'S', 'A' ]

------Bonus------
let newArray = [...[,,]];
console.log(newArray);

I thought it must to be [',', ',']
but it is - [ undefined, undefined ]
*/

//Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let welcomeStudents = []
users.map((item) => {
    welcomeStudents.push(`Hello ${item.firstName}`)
})
console.log(welcomeStudents)

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');

//3. Bonus : Chain the filter method with a map method, 
//to return an array containing only the lastName of the Full Stack Residents.

const fullStackResidentLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(resident => resident.lastName);

//console.log(fullStackResidentLastNames)

/*Exercise 5 : Star Wars
Instructions
Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
Use the reduce() method to combine all of these into a single string.*/

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

const combinedString = epic.reduce((acc, cur) => `${acc} ${cur}`, '')

//console.log(combinedString)

/*
Exercise 6 : Employees #2
Instructions
Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
Using the filter() method, create a new array, containing the students that passed the course.
Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
(ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
*/

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const newArr = students.filter(item => item.isPassed === true)   

console.log(newArr)

/*Bonus : Chain the filter method with a forEach method, to congratulate the students 
with their name and course name (ie. “Good job Jenner, you passed the course 
    in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)*/

const finalArr = []
    students.filter(item => item.isPassed === true).forEach(element => {
    finalArr.push(`Good job ${element.name}, you passed the course in ${element.course}`)
})

console.log(finalArr)
