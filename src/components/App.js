import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage, LayoutTemplate } from 'components'

const App = () => {
  return (
    <LayoutTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </LayoutTemplate>
  )
}

export default App
