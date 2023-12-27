/*

Get the value of the 2nd Option
Add a new option with the value 'Work' at the end of the select form
Add a new option with the value 'Primary School' at the beginning of the select form
Change 'College' as selected. Use the 3 properties we learned above
Add a button that alert the choice selected
*/

const select = document.getElementById('school-type')
const secendOption = select.children[1]

const newOption = document.createElement('option')
newOption.setAttribute('value', 'Work')
const textNode = document.createTextNode('Work')
newOption.appendChild(textNode)
select.appendChild(newOption)

const newOptionPrimarySchool = document.createElement('option')
newOptionPrimarySchool.setAttribute('value', 'Primary School')
const textNodePrimarySchool = document.createTextNode('Primary School')
newOptionPrimarySchool.appendChild(textNodePrimarySchool)
select.appendChild(newOptionPrimarySchool)
