const btnStart = document.getElementById('btnStart')
const btnCheck = document.getElementById('btnCheck')

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

async function startGameClick() {
    const btnCheck = document.getElementById('btnCheck')
    const btnStart = document.getElementById('btnStart')
    const optionsContainer = document.getElementById('options-container')

    btnCheck.style.visibility = 'visible'
    btnStart.style.visibility = 'hidden'

    const dataString = localStorage.getItem('data')
    const data = JSON.parse(dataString)

    const picContainer = document.getElementById('pic-container')
    const input = document.getElementById('input')

    input.style.visibility = 'visible'

    const indexForEmoji = getRandomInt(data.length)
    localStorage.setItem('indexForEmoji', JSON.stringify(indexForEmoji))

    const indexForFirstOption = getRandomInt(data.length)
    const indexForThirdOption = getRandomInt(data.length)

    const arrofIndexes = [indexForFirstOption, indexForEmoji, indexForThirdOption]

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const shuffledArray = shuffleArray(arrofIndexes)

    if (data && data.length > 0) {

        picContainer.innerText = data[indexForEmoji].emoji

        for (const i of shuffledArray) {
            const p = document.createElement('p');
            p.innerText = data[i].name;
            p.style.margin = '15px'
            optionsContainer.appendChild(p)
        }
        
    } else {
        console.log("No data available");
    }

}

async function handleCheckClick() {
    const optionsContainer = document.getElementById('options-container')

    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }

    const dataString = localStorage.getItem('data')
    const data = JSON.parse(dataString)

    const indexForEmojiString = localStorage.getItem('indexForEmoji')
    const dataIndexForEmoji = JSON.parse(indexForEmojiString)

    const input = document.getElementById('input')
    const inputValue = input.value.toLowerCase().trim();
    const emojiName = data[dataIndexForEmoji].name.toLowerCase().trim();

    showMessage(inputValue, emojiName)
    startGameClick()

    input.value = ''
}

function showMessage(inputValue,emojiName) {
    console.log('Input Value:', inputValue);
    console.log('Emoji Name:', emojiName);
        
        if (inputValue === emojiName) {
            message.textContent = 'Correct';
        } else {
            message.textContent = 'Not Correct';
        }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


document.addEventListener('DOMContentLoaded', async () => {
    await getContent();
});

btnStart.addEventListener('click', startGameClick)
btnCheck.addEventListener('click', handleCheckClick)