/*
Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.*/
setTimeout(() => {
    console.log("Hello World")
}, '2000')  

/*
Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
*/

function addParagraph() {
    const container = document.getElementById('container')
    let p = document.createElement('p')
    let textNode = document.createTextNode('Hello World')
    p.appendChild(textNode)

    container.appendChild(p)
}

setTimeout(() => {
    addParagraph()
}, '2000')

/*
Part III
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the 
<div id="container">.
The interval will be cleared (ie. clearInterval), when the user 
will click on the button.
Instead of clicking on the button, the interval will be cleared 
(ie. clearInterval) as soon as there will be 5 paragraphs inside
 the <div id="container">.
*/

let intervalID = window.setInterval(addParagraph, 2000)

const stopButton = document.getElementById('clear')

stopButton.addEventListener('click', () => {
    clearInterval(intervalID)
});


const allP = document.querySelectorAll('container p');
if (allP.length === 5) {
    clearInterval(intervalID)
} 

intervalID()
