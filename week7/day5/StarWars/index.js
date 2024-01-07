const button = document.getElementById('button')

const showLoader = () => {
    const loader = document.createElement('p')
    const textNode = document.createTextNode('Loading ...')
    loader.appendChild(textNode)
    loader.setAttribute('style', 'color: #fff')
    const container = document.getElementById('container')
    container.appendChild(loader);
  };
  
  const hideLoader = () => {
    const loader = document.getElementsByTagName('p')[0]
    loader.setAttribute('style', 'display: none')
  };

const myQuery = async() => {
    try {
        const randomId = getRandomId(83)
        showLoader()
        const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`)
        const data = await res.json()
        const planet = await fetch(data.result.properties.homeworld)
        const homeworldData = await planet.json()
        hideLoader()
        
        const container = document.getElementById('container')

        const name = document.createElement('h1')
        const nameTextNode = document.createTextNode(data.result.properties.name)
        name.appendChild(nameTextNode)
        name.setAttribute('style', 'font-size: 30px;')
        container.appendChild(name)

        const height = document.createElement('p')
        const heightTextNode = document.createTextNode(`Height: ${data.result.properties.height}`)
        height.appendChild(heightTextNode)
        height.setAttribute('style', 'margin-bottom: 20px; margin-top: 0')
        container.appendChild(height)

        const gender = document.createElement('p')
        const genderTextNode = document.createTextNode(`Gender: ${data.result.properties.gender}`)
        gender.appendChild(genderTextNode)
        gender.setAttribute('style', 'margin-bottom: 20px; margin-top: 0')
        container.appendChild(gender)

        const birthYear = document.createElement('p')
        const birthYearTextNode = document.createTextNode(`Birth Year: ${data.result.properties.birth_year}`)
        birthYear.appendChild(birthYearTextNode)
        birthYear.setAttribute('style', 'margin-bottom: 20px; margin-top: 0')
        container.appendChild(birthYear)

        const homeWorld = document.createElement('p')
        const homeWorldTextNode = document.createTextNode(`Home World: ${homeworldData.result.properties.name}`)
        homeWorld.appendChild(homeWorldTextNode)
        homeWorld.setAttribute('style', 'margin-bottom: 20px; margin-top: 0')
        container.appendChild(homeWorld)
    }
    catch(error) {
        hideLoader()
        const errorMessage = document.createElement('p')
        const errorMessageTextNode = document.createTextNode("Oh No! That person isn't available.")
        errorMessage.appendChild(errorMessageTextNode)
        errorMessage.setAttribute('style', 'margin-top: 20px;')
        container.appendChild(errorMessage)
    }
}

function getRandomId(max) {
     return Math.floor(Math.random() * max)
}

function handleClick() {
    const container = document.getElementById('container')

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    myQuery()
}

button.addEventListener('click', handleClick)
