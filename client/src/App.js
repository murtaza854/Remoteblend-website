import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RoutesFile from './RoutesFile';
import 'swiper/scss'; // core Swiper
import 'swiper/scss/navigation'; // Navigation module
import 'swiper/scss/pagination'; // Pagination module
import './App.scss';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="*">
          <RoutesFile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
