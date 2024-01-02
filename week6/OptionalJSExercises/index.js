/*Question 1:
Clean the room function:

Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these, into individual array that is ordered.

For example answer(ArrayFromAbove) should return: 
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

Bonus: Make it so it organizes strings differently 
from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/


function sortOfInput(arr) {
    arr.sort((a, b) => a - b)
    
    const groupedArray = []
    let tempArray = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            tempArray.push(arr[i])
        } else if (tempArray.length > 0) {
            tempArray.push(arr[i])
            groupedArray.push([...tempArray])
            tempArray = []
        } else {
            groupedArray.push(arr[i])
        }
    }
    
    return groupedArray
}

console.log(sortOfInput([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]))

/*
Question 2:
Write a javascript function that takes an array of numbers and a target number.

The function should find two different numbers in the array that, 
when added together, give the target number.

For example: answer([1,2,3], 4) should return [1,3]
*/

function handlePareReturn(arr, num) {
    let newArr = []
    for (let i = 0; i < arr.length + 1; i++) {
        for (let j = (i + 1); j < arr.length + 1; j++) {
            if (arr[i] + arr[j] == num) {
                newArr.push(arr[i], arr[j])
                return newArr
            }
        }
    }
 
    return 0;
}

//console.log(handlePareReturn([1,2,3], 4))

console.log(handlePareReturn([4,2,1,3,3,1,4,5], 8))

/*
Question 3:
Write a function that converts HEX to RGB.

Then Make that function auto-detect the formats so 
that if you enter HEX color format it returns RGB and 
if you enter RGB color format it returns HEX.
*/
/*
function convert(hexFormat) {
    let rgb = ''
    return rgb

}*/

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys
/*[
    {id:'user1',age:44, name: 'picard'},
    {id:'user3',age:109, name: 'janeway'}
]

const users = {
    user1: { age: 44, name: 'picard', },
    user2: { age: 12, name: 'sisko', },
    user3: { age: 109, name: 'janeway',},
}
const userArray = Object.keys(users);

const arr = userArray.map((item) => users[item].age)
let result = arr.filter((item) => item.age > 30)

console.log(result)*/
