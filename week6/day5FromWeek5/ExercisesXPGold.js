
//Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7]

for (i of numbers){
    if (i % 3 == 0) {
        console.log(true)
    }else {
        console.log(false)
    }
}

//Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let userName = prompt('Enter your name:')  
if (userName.toLowerCase() in guestList) {
    console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}.`)
}else {
    console.log("Hi! I'm a guest.")
}

//Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];

let sum = 0
let highest = []

for (i of age) {
    sum += i
}
console.log(sum)

for (i of age) {
    if (highest.length) {
        if (highest[0] < i) {
            highest[0] = i
        }
    }else{
        highest[0] = i
    }
}
console.log(highest)

