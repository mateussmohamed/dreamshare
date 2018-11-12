import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from 'templates'
import { Home } from 'pages'

// import components from 'components'
// import { Layout, Home } from 'components'
// console.log(components)

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

render(<App />, document.getElementById('app'))
