import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

//pages
import Index from '../pages/Profile';
import WorkPage from '../pages/Work';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.INDEX} component={() => <Index />} />
      <Route exact path={routes.WORK} component={() => <WorkPage />} />

      <Footer />
    </div>
  </Router>

export default App;
