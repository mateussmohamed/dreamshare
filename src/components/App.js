import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from 'components'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
