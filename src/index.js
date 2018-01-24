import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        {/* <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts/new" component={PostsNew} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
