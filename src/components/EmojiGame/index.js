import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import WinOrLossCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    emojisClickedList: [],
    gameInProgress: true,
    topScore: 0,
  }
// resetting game for playagain
  resetGame = () => {
    this.setState({emojisClickedList: [], gameInProgress: true})
  }
  
//getting list of shuffled emoji's list
  getShuffledEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return shuffledEmojisList
  }

  // based on score finish and seting topScore
  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    const newTopScore = score > topScore ? score : topScore
    this.setState({topScore: newTopScore, gameInProgress: false})
  }

  // passing objects to WinOrLossCard componnet by checking length
  renderScoreCard = () => {
    const {emojisList} = this.props
    const {emojisClickedList} = this.state
    const wonOrLoss = emojisClickedList.length === emojisList.length
    return (
      <WinOrLossCard
        isWon={wonOrLoss}
        score={emojisClickedList.length}
        playAgain={this.resetGame}
      />
    )
  }

//finding whether emoji is clicked or not by passing id as argument
  isEmojiClicked = id => {
    const {emojisList} = this.props
    const {emojisClickedList} = this.state
    const emojiPresent = emojisClickedList.includes(id)
    const allEmojisClicked = emojisList.length - 1 === emojisClickedList.length
    if (emojiPresent) this.finishGameAndSetTopScore(emojisClickedList.length)
    if (allEmojisClicked)
      this.finishGameAndSetTopScore(emojisClickedList.length)

    this.setState({emojisClickedList: [...emojisClickedList, id]})
  }

// passing objects to EmojiCard Component
  renderEmojiCard = () => {
    const {shuffledEmojisList} = this.getShuffledEmojis()
    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            emojiClicked={this.isEmojiClicked()}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {emojisClickedList, topScore, gameInProgress} = this.state
    return (
      <div className="bg-container">
        <NavBar
          score={emojisClickedList.length}
          topScore={topScore}
          isGameInProgress={gameInProgress}
        />
        <div className="emoji-container">
          {gameInProgress ? this.renderEmojiCard() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
