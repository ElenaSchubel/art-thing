import React from 'react'
import randomWord from 'random-words'

class RandomButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  handleClick (e) {
    this.setState({clicked: !this.state.clicked})
  }


  render() {
    return (
      <button className='random-button' onClick={(e) => this.handleClick(e)}>
        {this.state.clicked ? randomWord() : this.props.clickMsg}
      </button>
    )
  }
}

export default RandomButton
