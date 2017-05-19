import React from 'react'

<<<<<<< HEAD
const Elena = () => {
  return (
    <div>
      Hello
    </div>
  )
}
=======
class Elena extends React.Component {
  constructor(props) {
    super(props)
    let images = [
      "images/potato.jpg",
      "images/manypotato.jpg",
      "images/happypotate.png"
    ]
    console.log("constructing");
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
        <button onClick={() => this.state.randomImgs(this.state.image,this.state.images)}/>
        <div id='image'>
          <img src={this.state.image}/>

        </div>
      </div>
    )

  }
}



>>>>>>> elena
export default Elena
