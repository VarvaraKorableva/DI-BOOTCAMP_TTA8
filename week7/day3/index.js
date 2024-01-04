/*Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2*/

function createNumber(num)  {
    let counter = 0
    let oddCounter = 0
    let arrNumber = num.toString().split('').map(Number)

    do{
        if (oddCounter.toString().split('').length > 1) {
            for(i of arrNumber) {
                counter += i   
                oddCounter += i      
            }
        }else{
            break
        }
        
    } while (true) //oddCounter.toString().split('').length == 1
    //console.log(oddCounter.toString().split(''))
    console.log(counter)
    console.log(oddCounter.toString().split('').length)

}

createNumber(132189)