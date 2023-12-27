//Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.getElementsByTagName('h1')
console.log(h1)

//Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.getElementsByTagName('article')[0]
const paragraphs = document.getElementsByTagName('p')
const lastParagraph = paragraphs[paragraphs.length - 1]

article.removeChild(lastParagraph)

//Add a event listener which will change the background 
//color of the h2 to red, when it’s clicked on.

const h2 = article.getElementsByTagName('h2')[0]

function changeColor(event) {
    const clickedH2 = event.target;
    clickedH2.setAttribute('style', 'background-color: red;')
}

h2.addEventListener('click', changeColor);

//Add an event listener which will hide the h3 
//when it’s clicked on (use the display:none property).

const h3 = article.getElementsByTagName('h3')[0]

function changeVisible(event) {
    const clickedH3 = event.target;
    clickedH3.setAttribute('style', 'display: none;')
}

h3.addEventListener('click', changeVisible)

//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold.

const btn = document.createElement('button')
const textBtn = document.createTextNode('Make bold text')
btn.appendChild(textBtn)
article.appendChild(btn)

const allP = article.getElementsByTagName('p')

function makeTextBold() {
    for(i of allP) {
        i.setAttribute('style', 'font-weight: bold;')
    } 
}

btn.addEventListener('click', makeTextBold);