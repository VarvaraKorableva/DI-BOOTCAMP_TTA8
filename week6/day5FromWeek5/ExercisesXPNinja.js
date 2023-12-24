/*
Exercise 1 : Checking The BMI
Instructions
Hint:
- You must use functions to complete this exercise, 
to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. 
Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), 
that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.
*/


varvara = {
    fullName : 'Varvara',
    mass: 57,
    height: 165,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
}

ilya = {
    fullName : 'Ilya',
    mass: 72,
    height: 168,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
}

function compareBMI(first, second) {
  if (first.calculateBMI > second.calculateBMI) {
    console.log(`${first.fullName} has the largest BMI`)
  } else {
    console.log(`${second.fullName} has the largest BMI`)
  }
} 

compareBMI(varvara, ilya)

/*
Exercise 2 : Grade Average
Instructions
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument 
and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.*/

myArr = [80,90,89]

function findAvg(gradesList) {
    let sum = 0
    for (i of gradesList){
        sum += i
    } 
    const averageGrade = sum / gradesList.length
    return averageGrade
}

function sayResult(func, myArr) {
    let averageGrade = func(myArr)
    if (averageGrade > 65) {
        console.log('You are passed')
    }else {
        console.log('Sorry, you are failed and you must to repeat the course')
    }
}

sayResult(findAvg, myArr)

