import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'

//components
import Footer from '../components/footer/Footer'

//pages
import { ProfilePage } from '../pages'
import { WorkoutPage } from '../pages/workout'
import * as routes from '../constants/routes'

const App = () =>
  <Router>
    <Fragment>
      <Switch>
        <Route exact path={routes.INDEX} component={() => <ProfilePage />} />
        <Route path={routes.WORKOUT}>
          <WorkoutPage />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  </Router>

export default App
