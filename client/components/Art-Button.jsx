import React from 'react'

class ArtButton extends React.Component {
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
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.clicked ? this.props.unClick : this.props.clickMsg}
      </button>
    )
  }
}

export default ArtButton
