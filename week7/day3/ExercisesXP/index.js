/*
Exercise 1 : Comparison

Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10.

*/
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if(num <= 10) {
            resolve(`${num} is less than or equal to 10`)
        } else {
            reject(`${num} is greater than 10`)
        }
    }) 
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))  

  
/*
Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.
*/  

const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ('success')
    }, 4000);
})

testPromise.then((res) => {
    console.log(res)
})

/*
Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
*/

const resolvedPromise = Promise.resolve(3)
resolvedPromise.then((value) => {
    console.log("Resolved:", value)
})

const rejectedPromise = Promise.reject("Boo!")
rejectedPromise.catch((error) => {
    console.log("Rejected:", error)
})