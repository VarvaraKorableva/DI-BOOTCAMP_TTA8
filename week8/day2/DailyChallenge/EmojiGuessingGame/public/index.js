const btn = document.getElementById('btn')

const getContent = async() => {
    try {
        const res = await fetch(`http://localhost:3000/api/data`)
        const data = await res.json()

        localStorage.setItem('data', JSON.stringify(data))
    }
    catch (error) {
        console.log(error);
    }
}    

async function handleClick() {
    const picContainer = document.getElementById('pic-container')
    const btn = document.getElementById('btn')
    const firstOption = document.getElementById('first-option')
    const secondOption = document.getElementById('second-option')
    const thirdOption = document.getElementById('third-option')
    const dataString = localStorage.getItem('data')
    const data = JSON.parse(dataString)

    const indexForEmoji = getRandomInt(data.length)

    const indexForFirstOption = getRandomInt(data.length)
    //const indexForSecondOption = getRandomInt(data.length)
    const indexForThirdOption = getRandomInt(data.length)

    //const arrofIndexes = [indexForFirstOption, indexForEmoji, indexForThirdOption]

    if (data && data.length > 0) {

        picContainer.innerText = data[indexForEmoji].emoji

        firstOption.innerText = data[indexForFirstOption].name
        firstOption.style.visibility = 'visible'
        firstOption.setAttribute('value', data[indexForFirstOption].name)

        secondOption.innerText = data[indexForEmoji].name
        secondOption.style.visibility = 'visible'
        secondOption.setAttribute('value', data[indexForEmoji].name)

        thirdOption.innerText = data[indexForThirdOption].name
        thirdOption.style.visibility = 'visible'
        thirdOption.setAttribute('value', data[indexForThirdOption].name)

        btn.innerText = "Try again"
    } else {
        console.log("No data available");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


document.addEventListener('DOMContentLoaded', async () => {
    await getContent();
});
btn.addEventListener('click', handleClick)
