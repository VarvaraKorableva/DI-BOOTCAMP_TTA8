const {objProducts} = require('./products')

function takeProductName(name) {
    for (const i of objProducts) {
        if (i.name === name) {
            return i
        }else {
            return 'This product does not exist'
        }
    }
}


console.log(takeProductName('tomato'))