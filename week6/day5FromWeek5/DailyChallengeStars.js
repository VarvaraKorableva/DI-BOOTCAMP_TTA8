/*
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops 
(Nested means one inside the other - check out this tutorial of nested loops).
Do this Daily Challenge by yourself, without looking at the answers on the internet.
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/

let myArr = [];

for (let i = 0; i < 6; i++ ) {
    myArr.push('* ')
    console.log(myArr.join(''))
}

/*
let mySecondArr = [
    [["* "]],
    [["* "], ["* "]],
    [["* "], ["* "], ["* "]],
    [["* "], ["* "], ["* "], ["* "]],
    [["* "], ["* "], ["* "], ["* "], ["* "]],
    [["* "], ["* "], ["* "], ["* "], ["* "], ["* "]],
]*/
/*
for(i in mySecondArr){
    for (j in mySecondArr[i]) {
        
    }
}*/

/*
for(i in mySecondArr) {
    for (let j = 0; i.length; j++) {
        console.log()
    }
}*/





