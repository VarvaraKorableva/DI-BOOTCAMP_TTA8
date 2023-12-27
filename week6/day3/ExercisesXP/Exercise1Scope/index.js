// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 
//- it will be error, because we can't change meaning of const
// a = 3, at first you dectarate a = 5, than you ask- if a > 1 (5 > 1) a must to be 3

//#2
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // a = 0
funcTwo() // a = 5
funcThree() // a = 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? - it will be error, because we can't change meaning of const


//#3
function funcFour() {
    window.a = "hello";
}
funcFour()
console.log (a)

function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // hello
funcFive()

//#4
//let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? //nothing because these are two difference variables and they don't change in this code

//#5
//let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? //nothing because these are two difference variables and they don't change in this code

