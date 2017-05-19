import React from 'react'

const Elena = () => {
  let images = [
    "images/potato.jpg",
    "manypotato.jpg",
    ""
  ]
  let image = images[0]

  return (
    <div>
      <button onClick={() => randomImgs()}/>
      <img src={image}/>
    </div>
  )
}


function randomImgs() {

  var rnd = Math.floor( Math.random() * images.length);
  image = images[rnd]
}

export default Elena
