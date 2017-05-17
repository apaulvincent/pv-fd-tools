import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';

import { hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history'

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import notes from './data/notes';


// create an object for the default data
const defaultState = {
  notes
};

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(appHistory, store);
export default store;
