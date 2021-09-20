import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './store/reducer';
import {postNewMessage} from './store/action';
import {nanoid} from 'nanoid';
import {ID_LENGTH, TIMER_DELAY} from './const';
import {generateRandomString} from './utils';

const store = configureStore({reducer});

(() => {
  setTimeout(
      function run() {
        store.dispatch(
            postNewMessage({
              id: nanoid(ID_LENGTH),
              text: generateRandomString(),
              seen: false
            })
        );
        setTimeout(run, TIMER_DELAY);
      }, TIMER_DELAY);
})();


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
