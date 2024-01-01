const getCommonWords = ((firstStr, secondString) => {
    let firstArr = Array.from(firstStr.trim().toLowerCase());
    let secondArr = Array.from(secondString.trim().toLowerCase());
    if(secondArr.includes(' ')) {
        secondArr.splice(secondArr.indexOf(' '), 1)
    } if(firstArr.includes(' ')){
        firstArr.splice(firstArr.indexOf(' '), 1)
    }


    let commonArr = firstArr.filter(item => secondArr.includes(item));

    if (commonArr.length === secondArr.length) {
        return true
    } else {
        return false
    }
})

console.log(getCommonWords('School', 'The classroom'))