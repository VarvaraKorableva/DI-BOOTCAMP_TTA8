const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

/*
The first function is named toJs():
this function converts the morse json string provided above to a morse javascript object.
if the morse javascript object is empty, throw an error (use reject)
else return the morse javascript object (use resolve)
*/

function toJs(morseStr) {
    let morseObj = JSON.parse(morseStr)
    return new Promise((resolve, reject) => {
        if(Object.keys(morseObj).length === 0) {
            resolve (morseObj)
        } else {
            reject ('Empty object')
        }
    })
}

/*
The second function called toMorse(morseJS), 
takes one argument: the new morse javascript object.

This function asks the user for a word or a sentence.
if the user entered a character that doesn’t exist 
in the new morse javascript object, throw an error. (use reject)

else return an array with the morse translation of the user’s word.
if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
*/

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        //let userInput = prompt('Input a word or a sentence, please:')
        let userInput = 'hello'
        let arr = userInput.toLowerCase().split('')
        let userArr = arr.filter((item) => item !== ' ')
        let result = []

        morseJS.then((res) => {
            return new Promise((innerResolve, innerReject) => {
                userArr.every((char) => {
                    if (res[char]) {
                        result.push(res[char])
                        //return true
                    } else {
                        innerReject('You must only use characters existing in the Morse object')
                        return false
                    }
                })
                innerResolve(result)
            })
        })
        .then((result)=> {
            joinWords(result)
            resolve(result) // Возвращаем результат из функции toMorse
        })
        .catch((error) => {
            reject(error) // Если возникает ошибка, отклоняем промис
        })
    })
}

//toMorse(toJs(morse))

/*The third function called joinWords(morseTranslation), takes one argument: the morse translation array
this function joins the morse translation by using line break and display it on the page (ie. On the DOM)*/

function joinWords(morseTranslation) {
    const div = document.querySelector('.div')
    morseTranslation.forEach((item) => {
        const span = document.createElement('span')
        span.innerText = item
        div.appendChild(span)
    })
    //console.log(morseTranslation)
}

toMorse(toJs(morse))