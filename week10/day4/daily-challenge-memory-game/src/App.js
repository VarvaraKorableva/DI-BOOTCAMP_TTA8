import './App.css';
import React from 'react'
import NavBar from './components/NavBar.js'
import СardsField from './components/cardsField.js'
import superheroes from './data.js'

function App() {
  const [topScore, setTopScore] = React.useState(0)
  const [data, setData] = React.useState(superheroes)
  const [score, setScore] = React.useState(0)

  function shuffleArray(data) {
    const shuffledArray = [...data]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setData(shuffledArray);
  }

  function changeIsClicked(id) {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        if (item.clicked === true) {
          setTopScore(score)
          setScore(0)
          data.forEach(item => {
            item.clicked = false
          })
        } else {
          return { ...item, clicked: true };
        }
      }
      return item;
    });
    
    setData(updatedData)
    shuffleArray(updatedData)
  }

  React.useEffect(() => {
    let counter = 0;
  
    for (const item of data) {
      if (item.clicked === true) {
        counter += 1;
      }
    }
  
    setScore(counter)
  }, [data]);

return (
  <div>
    <NavBar 
      score = {score} 
      topScore = {topScore}/>
    <СardsField 
      data = {data}
      shuffleArray = {shuffleArray}
      changeIsClicked = {changeIsClicked}
      />  
  </div>
);
}

export default App;
