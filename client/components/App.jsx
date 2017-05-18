import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Alan from './Alan'
import Elena from './Elena'
import Nat from './Nat'
import Gabe from './Gabe'


const App = () => {
  return (
    <Router>
      <div>
        <h1>React development has begun!</h1>
        <Route path='/' component={Alan}/>
        <Route path='/' component={Elena}/>
        <Route path='/' component={Nat}/>
        <Route path='/' component={Gabe}/>
      </div>
    </Router>
  )
}

export default App
