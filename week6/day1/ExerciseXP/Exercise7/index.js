/*create an array called allBooks. 
This is an array of objects. Each object is a book that has 4 
keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).
Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)*/

const allBooks = [
    {
        title: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        image : 'https://images.unsplash.com/photo-1637011636272-4cc148fb3e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWxpY2UlMjBpbiUyMFdvbmRlcmxhbmR8ZW58MHx8MHx8fDA%3D',
        alreadyRead : false,
    },
    {
        title: 'A little prince',
        author: 'Antoine de Saint-Exupéry',
        image : 'https://images.unsplash.com/photo-1643439766762-b3731e689f83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEElMjBsaXR0bGUlMjBwcmluY2V8ZW58MHx8MHx8fDA%3D',
        alreadyRead : false,
    },
]

/*

Using the DOM, render each book inside a div 
(the div must be added to the <section> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
*/

const section = document.getElementsByClassName('listBooks')[0]

for (book of allBooks) {
    const newDiv = document.createElement('div')
    const textNode = document.createTextNode(`${book.title} written by ${book.author}`)
    
    newDiv.appendChild(textNode)
    section.appendChild(newDiv)
}
