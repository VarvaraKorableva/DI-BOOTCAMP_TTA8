import './NavBar.css'

function NavBar({score, topScore}) {
    return (
      <div className="navbar-main-container">

        <div className="navbar-container">
          <h1 className="navbar-title">Superheroes Memory Game</h1>
          <div className="navbar-score-container">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        </div>
        <div className='subtitle-container'>
          <h2 className='subtitle'>Get points by clicking on an image but don't click on any more than once!</h2>
        </div>
      </div>
    );
  }
  
  export default NavBar;