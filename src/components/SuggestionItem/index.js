import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onShowInput} = props
  const {suggestion} = suggestionDetails

  const onChangeClick = () => {
    onShowInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestionItem">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="img-size"
        onClick={onChangeClick}
      />
    </li>
  )
}
export default SuggestionItem
