import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './CRUD/scss/crud.scss'
import LeftList from './CRUD/LeftList'

import Profilelist from './CRUD/components/Profilelist'
import Dataaddition from './CRUD/components/Dataaddition'

function App() {
  return (
    <Router>
      <>
        <LeftList />
        <Switch>
          <div className="right">
            <div className="rightheader"></div>
            <div className="rightdata">
              <Route exact path="/">
                <Profilelist />
              </Route>
              <Route path="/dataaddition">
                <Dataaddition />
              </Route>
            </div>
          </div>
        </Switch>
      </>
    </Router>
  )
}

export default App
