import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './store/reducer';
import {postNewMessage} from './store/action';
import {nanoid} from 'nanoid';
import {ID_LENGTH, TIMER_DELAY} from './const';

const store = configureStore({reducer});

const generateRandomString = () => Math.random().toString(36).substr(2, 5);
let counter = 0;

const startSendingMocks = () => {
  setTimeout(
      function run() {
        store.dispatch(
            postNewMessage({
              id: nanoid(ID_LENGTH),
              text: `${++counter} - ${generateRandomString()}`,
              seen: false
            })
        );
        setTimeout(run, TIMER_DELAY);
      }, TIMER_DELAY);
};

// startSendingMocks();

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
