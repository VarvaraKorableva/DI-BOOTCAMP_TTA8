/*In todays exercise we will be creating a Mad Libs game.

Follow these steps :

Get the value of each of the inputs in the HTML file when the form 
is submitted. Remember the event.preventDefault()

Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button 
should change the story currently displayed (but keep the values entered 
by the user). The user could click the button at least three times and 
get a new story. 
Display the stories randomly.*/

const btn = document.getElementById('lib-button')

function getValues(event) {
    event.preventDefault()
    const noun = document.getElementById('noun').value.trim()
    const adjective = document.getElementById('adjective').value.trim()
    const person = document.getElementById('person').value.trim()
    const verb = document.getElementById('verb').value.trim()
    const place = document.getElementById('place').value.trim()
    
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        console.log('Values ​​must be filled in')
    } else {
        const generatedStory = `Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} ${verb} in ${place}.`
        let story = document.getElementById('story')
        const textNode = document.createTextNode(generatedStory)
        story.appendChild(textNode)
    }
}

btn.addEventListener('click', getValues)