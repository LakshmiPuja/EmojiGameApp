// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiClicked, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClicked(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onClickEmoji} className="emoji-btn">
        <img src={emojiUrl} className="emoji-icon" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
