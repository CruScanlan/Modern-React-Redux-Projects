import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from "./components/posts_show";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/" component={PostsIndex} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
