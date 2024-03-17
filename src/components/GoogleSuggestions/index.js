import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInpur: ''}

  onChangeInput = event => {
    this.setState({searchInpur: event.target.value})
  }
  onShowInput = suggestion => {
    const {suggestionsList} = this.state
    const filteredData = suggestionsList.filter(
      each => each.suggestion === suggestion,
    )

    this.setState({searchInpur: filteredData})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInpur} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInpur.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logosize"
        />
        <div className="search-container">
          <div className="search-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon-size"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeInput}
              className="input-ele"
              value={searchInpur}
            />
          </div>
          <ul className="item">
            {searchResults.map(eachSearch => (
              <SuggestionItem
                suggestionDetails={eachSearch}
                key={eachSearch.id}
                onChangeClick={this.onChangeClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
