//Exercise 1 : Find The Numbers Divisible By 23

function displayNumbersDivisible(divisor) {
    let divisibleBy23 = []
    let sum = 0
    for(let i = 0; i < 501; i++) {
        if (i % divisor == 0) {
            divisibleBy23.push(i)
        }
    }
    for (i of divisibleBy23) {
        sum += i
    }
    console.log(`Outcome: ${divisibleBy23}`)
    console.log(`Sum: ${sum}`)

}

displayNumbersDivisible(23)

//Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ['banana', 'orange', 'apple', 'blueberry', 'blueberry']

function myBill() {
    let totalPrice = 0
    for (i of shoppingList) {
        for (key in stock) {
            if (i == key  && stock[key] > 0) {
                totalPrice += prices[key]
                stock[key] -= 1
            }else {
                console.log('Sorry, out of stock for now')
            }
        } 
    }

    console.log(totalPrice)
}

myBill()

//Exercise 3 : What’s In My Wallet ?
/*
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
*/

function changeEnough(itemPrice, amountOfChange) {
   let sum = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01)
   if (sum > itemPrice) {
    return true
   } else {
    return false
   }
}

changeEnough(4.25, [25, 20, 5, 0])

//Exercise 4 : Vacations Costs

function hotelCost() {
    do {
        const price = 140
        let numberOfNight = prompt('How many nights would like to stay in the hotel?:')
        let fullPrice = 0
        if (numberOfNight !== null && numberOfNight !== "" && !isNaN(numberOfNight) && numberOfNight > 0) {
            fullPrice = numberOfNight * price
            return fullPrice
        }
    }  while (true)

}

function planeRideCost() {
    let sum = 0
    do {
        let userDestination = prompt('What is your destination?:')

        if (userDestination !== null && userDestination.trim() !== "" && typeof userDestination === 'string') {
            userDestination = userDestination.toLowerCase();

            if (userDestination === 'london') {
                sum = 183;
                break;
            } else if (userDestination === 'paris') {
                sum = 220;
                break;
            } else {
                sum = 300;
                break;
            }
        }
    } while (true);
    return sum
}

function rentalCarCost() {
    const oneDayPrice = 40
    const discount = 5
    let days = 0
    let totalPrice = 0
    let sumOfDiscount = 0

    do {
        days = prompt('How long you would like to rent the car?:')
        if(days == null || isNaN(days || days.trim() !== "")) {
            console.log('Inner just numbers')
        }else {
            if(days > 10) {
                sumOfDiscount = (days * oneDayPrice) / 100 * discount
                totalPrice = days * oneDayPrice - sumOfDiscount 
                break
            }else {
                totalPrice = days * oneDayPrice
                break
            } 
        }
    } while (true)

    return totalPrice
}

function totalVacationCost() {
    let totalCost = hotelCost() + planeRideCost() + rentalCarCost()
    return totalCost
}

totalVacationCost()
