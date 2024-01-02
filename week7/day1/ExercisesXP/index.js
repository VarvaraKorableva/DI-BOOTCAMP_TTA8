//Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

/*Exercise 2: Display Student Info

Using the code above, destructure the parameter inside the function and 
return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
*/

function displayStudentInfo(objUser){
    return `Your full name is ${objUser.first} ${objUser.last}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})

//Exercise 3: User & Id

/*
Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.
*/

const users = { user1: 18273, user2: 92833, user3: 90315 }
const result = Object.entries(users).map(([key, value]) => [key, value])
console.log(result)

/*
Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
*/

const newArr = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(newArr)

/*
Exercise 4 : Person Class
Instructions
Analyze the code below. What will be the output?
*/

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);//object

//Exercise 5 : Dog Class

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//  Analyze the options below. Which constructor will successfully extend the Dog class?  

  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

let newDog = new Labrador("Lora", 'big')  
console.log(newDog.name)

// Exercise 6 : Challenges
//Evaluate these (ie True or False)
//[2] === [2] //false
//{} === {} //false

//What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4
console.log(object3.number)//4
console.log(object4.number)//5

/*Create a class Animal with the attributes name, type and color. 
The type is the animal type, for example: dog, cat, dolphin ect …*/

class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}

/*
Create a class Mamal that extends from the Animal class. 
Inside the class, add a method called sound(). 
This method takes a parameter: the sound the animal makes, 
and returns the details of the animal 
(name, type and color) as well as the sound it makes.
*/

class Mamal extends Animal{
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}

/*
Create a farmerCow object that is an instance of the class Mamal. 
The object accepts a name, a type and a color and calls the sound 
method that “moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white
*/

const farmerCow = new Mamal("Сhamomile", "Cow", "brown")
console.log(farmerCow.sound('Moooo'))