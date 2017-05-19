import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'

import Nat from './Nat'
import Gabe from './Gabe'
import Alan from './Alan'
import Elena from './Elena'



const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Gabe}/>
        <Route path='/' component={Nat}/>
        <Route path='/' component={Alan}/>
        <Route path='/' component={Elena}/>

      </div>
    </Router>
  )
}

export default App
