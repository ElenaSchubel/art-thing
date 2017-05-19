import React from 'react'

class Elena extends React.Component {
  constructor(props) {
    super(props)
    let images = [
      "images/potato.jpg",
      "images/manypotato.jpg",
      "images/happypotate.png",
      "images/cutepotato.jpg",
      "images/cutpotato.jpg",
      "images/facepotato.jpg",
      "images/faces.jpg",
      "images/hipotato.jpg",
      "images/loadsofthem.jpg",
      "images/mrpotato.jpg",
      "images/artotato.jpg",
      "images/catpotato.jpg",
      "images/couchpotato.jpg",
      "images/cutecat.jpg"
    ]

    this.state = {
      images: images,
      image: images[0],
      randomImgs: (images) => {
        var rnd = Math.round(Math.random() * this.state.images.length)
        while (rnd == this.state.images.indexOf(this.state.image)) {
          rnd = Math.round(Math.random() * this.state.images.length)
        }

        this.setState({image: this.state.images[rnd]})
      }
    }
  }

  render() {
    console.log(this.state.image);
    return (
      <div>
        <button onClick={() => this.state.randomImgs(this.state.images)}/>
        <div id='image'>
          <img src={this.state.image}/>

        </div>
      </div>
    )

  }
}



export default Elena
