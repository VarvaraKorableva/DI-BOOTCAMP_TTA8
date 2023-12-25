
//Retrieve the div and console.log it

const div = document.getElementById('container')
console.log(div)

//Change the name “Pete” to “Richard”.
const peteName = document.getElementsByClassName('list')[0]
const newName = peteName.children[1]
newName.textContent = 'Richard'

//Delete the second <li> of the second <ul>.
const secondUl = document.getElementsByClassName('list')[1]
const secondLi = secondUl.children[1]
secondUl.removeChild(secondLi)

//Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (i of document.getElementsByClassName('list')) {
    i.children[0].textContent = 'Varvara'
}

//Add a class called student_list to both of the <ul>'s.
for (i of document.getElementsByClassName('list')) {
    i.classList.add('newClassName')
}
//Add the classes university and attendance to the first <ul>.
document.getElementsByClassName('list')[0].classList.add('university', 'attendance')

//Add a “light blue” background color and some padding to the <div>
div.setAttribute('style', 'background-color: lightblue;  padding: 5px;')

//Do not display the <li> that contains the text node “Dan”. (the last <li> of the last <ul>)
document.getElementsByClassName('list')[1].children[1].setAttribute('style', 'display:none')

//Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
document.getElementsByClassName('list')[0].children[1].setAttribute('style', 'border:1px solid lightblue')

//Change the font size of the whole body
document.body.style.fontSize = '26px'
//document.body.setAttribute('style', 'font-size: 8px')