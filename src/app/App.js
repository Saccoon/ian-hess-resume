import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//components
import Footer from '../components/footer/Footer'

//pages
import Index from '../pages/Profile'
import * as routes from '../constants/routes'

const App = () =>
  <Router>
    <Fragment>
      <Route exact path={routes.INDEX} component={() => <Index />} />
      <Footer />
    </Fragment>
  </Router>

export default App
