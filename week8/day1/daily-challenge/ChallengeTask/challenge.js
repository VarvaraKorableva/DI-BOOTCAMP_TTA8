const greet = require('../greeting.js')
const colorfulMessage = require('../colorful-message.js')
const main = require('../files/read-file.js')


const text = main()

async function displayColorText() {
    const text =  await main()
    console.log(colorfulMessage(greet(text)))
}

displayColorText()