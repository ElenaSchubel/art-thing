import React from 'react'
import Tone from 'tone'


const Gabe = () => {
  let sounds = ['a4','b4','c4','d4','e5','f4','g4']
  let soundsN = ['2n', '4n','6n','8n']
  var synth = new Tone.Synth().toMaster()
  var grainPlayer = new Tone.GrainPlayer().toMaster()

  const randomSound = () => {
    let idx = Math.floor(Math.random() * sounds.length - 1)
    return sounds[idx]
  }

  const randomOctave = () => {
    let idx = Math.floor(Math.random() * soundsN.length -1)
    return soundsN[idx]
  }

  const triggerSound = () => {
    console.log("clicked")
    synth.triggerAttackRelease(randomSound(), randomOctave())
    // gainPlayer.triggerAttackRelease(randomSound(), randomOctave());
    // synthBass.triggerAttackRelease('B2', '8n', '1m + 2n + 4n + 8n')
    // synth.triggerAttackRelease('E4', '8n', '4n + 8n')
  }

  return (
      <svg width={1000} height={200}>
        <circle onMouseOver={() => triggerSound()} cx={100} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={200} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={300} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={400} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={500} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={600} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={700} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={800} cy={100} r={10}/>
        <circle onMouseOver={() => triggerSound()} cx={900} cy={100} r={10}/>
        <button>Hello</button>
      </svg>
  )

}

export default Gabe
