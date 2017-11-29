import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';
import { firebaseApp } from './firebase';
import reducer from './reducers';

import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';

import { logUser } from './actions/index';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email))
    history.push('/');
  } else {
    history.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/forget-password" component={ForgetPassword} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)