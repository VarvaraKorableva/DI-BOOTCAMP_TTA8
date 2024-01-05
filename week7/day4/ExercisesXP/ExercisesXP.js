//Exercise 1 : Giphy API

const myQuery = () =>
  fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log('Error', error)
    })

//myQuery()

//Exercise 2 : Giphy API

const mySunQuery = () =>
  fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2&q=sun')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log('Error', error)
    })

// mySunQuery()

//Exercise 3 : Async Function

const myQueryFunc = async() => {
    try {
        const res = await fetch("https://www.swapi.tech/api/starships/9/")
        objectStarWars = await res.json()
        console.log(objectStarWars.result)
    } catch(error) {
        console.error('Error:', error);
    }
}

//myQueryFunc()

//Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

//asyncCall();

//calling then after 2 sec resolved