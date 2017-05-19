import React from 'react'

class JokeButton1 extends React.Component {
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
      <button className='joke-button' onClick={(e) => this.handleClick(e)}>
        {this.state.clicked ? this.props.unClick : this.props.clickMsg}
      </button>
    )
  }
}

export default JokeButton1
