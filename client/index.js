import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './assets/styles/style.scss';

// Import Containers
import App from './containers/App'
import Err404 from './containers/404'


import Home from './containers/Home'
import BoxShadow from './containers/BoxShadow'
import Border from './containers/Border'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Global React
window.React = React 

const router = (
  <Provider store={store}>
    <Router history={history}>

      <Route exact path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/box-shadow" component={BoxShadow}/>
        <Route path="/border-radius" component={Border}/>
      </Route>
      
      <Route path="*" component={Err404} />
    
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));