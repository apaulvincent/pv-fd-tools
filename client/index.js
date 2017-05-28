import React from 'react';

import { render } from 'react-dom';

// Import css
import './assets/styles/style.scss';

// Import Containers
import App from './containers/App'
import Err404 from './containers/404'


import Home from './containers/Home'
import BoxShadow from './containers/BoxShadow'
import Border from './containers/Border'
import Animation from './containers/Animation'
import Gradient from './containers/Gradient'

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
        <Route path="/animation" disabled={true} component={Animation}/>
        <Route path="/gradient" disabled={true} component={Gradient}/>
      </Route>
      
      <Route path="*" component={Err404} />
    
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));