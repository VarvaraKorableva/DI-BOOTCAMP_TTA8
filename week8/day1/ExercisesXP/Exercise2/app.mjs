import importedData from './data.mjs'

function addAges(data) {
let counter = 0
    data.forEach((item) => {
        counter += item.age
    })

    return counter / data.length
}

console.log(`Average age is ${addAges(importedData)}`)