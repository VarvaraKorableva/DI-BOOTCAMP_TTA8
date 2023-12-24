/*
Bubble Sort

const numbers = [5,0,9,1,7,4,2,6,3,8];

Using the .toString() method convert the array to a string.
Using the .join()method convert the array to a string. 
Try passing different values into the join.
Eg .join(“+”), .join(” “), .join(“”)
Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops 
(Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called “Bubble Sort”
Use a temporary variable  values in the array.
Use 2 “nested” for loops (Nested means one inside the other).
Add comments and console.log the result for each step, this will 
help you understand.
Requirement: Don’t copy paste solutions from Google
*/
const numbers = [5,0,9,1,7,4,2,6,3,8]

/*newOrder = []

for (i in numbers) {
    if (newOrder.length) {
        if(numbers[i] > newOrder[0]) {
            newOrder.push(numbers[i])
        } else {
            continue
        }
    } else {
        newOrder.push(numbers[i])
    }
   console.log(newOrder)
}*/

let flag = true;

do {
    flag = false;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) {
            flag = true;
            const meaning = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = meaning;
        }
    }
} while (flag);

console.log(numbers);