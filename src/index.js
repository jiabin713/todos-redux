import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoApp from './components/TodoApp';
import todoApp from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
