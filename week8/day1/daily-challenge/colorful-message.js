const chalk = require('chalk')

const colorfulMessage = (name) => chalk.bold.green(`Hello, ${name}!`)

console.log(colorfulMessage('Varvara'))
module.exports = colorfulMessage