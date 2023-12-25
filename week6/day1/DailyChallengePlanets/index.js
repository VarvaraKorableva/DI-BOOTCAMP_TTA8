/*
Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. 
This div should have a class named "planet".
Each planet should have a different background color. 
(Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
const planetColors = ['red', 'grey', 'lightblue', 'red', 'brown', 'saddlebrown', 'lightseagreen', 'blue']

const section = document.getElementsByClassName('listPlanets')[0]

for (planet of planets) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('planet')
    for(i of planetColors) {
        newDiv.setAttribute('style',`background-color: ${planetColors[i]};  width: 30px; height: 30px; border-radius: 50px;`)
    }
    console.log(newDiv)
    section.appendChild(newDiv)

}