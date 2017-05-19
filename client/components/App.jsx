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
        <div className="row">
          <div className="gabe">
            <Route path='/' component={Gabe}/>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4">
            <div className="nat">
              <Route path='/' component={Nat}/>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="alan">
              <Route path='/' component={Alan}/>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="elena">
              <Route path='/' component={Elena}/>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
