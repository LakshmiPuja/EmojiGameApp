// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, isGameInProgress, topScore} = props
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">TopScore: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
