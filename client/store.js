import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';

import { hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history'

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import data from './data/data';


// create an object for the default data
const defaultState = {
  data
};

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(appHistory, store);
export default store;
