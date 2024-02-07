// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {isWon, playAgain, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/loss-game-img.png'

  const headingText = isWon ? 'You Won' : 'You Loss'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-loss-card">
      <div className="detail-section">
        <h1 className="game-status">{headingText}</h1>
        <p className="score-label">{scoreText}</p>
        <p className="score-value">{score}</p>
        <button onClick={playAgain} type="button" className="play-again-btn">
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="win-or-loss-img" alt="" />
    </div>
  )
}
export default WinOrLossCard
