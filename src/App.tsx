import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignOut from './pages/SignOut';
import FullArticle from './pages/FullArticle';
import IncorrectDetailsSignIn from './pages/IncorrectDetailsSignIn';
import IncorrectDetailsSignUp from './pages/IncorrectDetailsSignUp';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signin/incorrectdetails" component={IncorrectDetailsSignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signup/incorrectdetails" component={IncorrectDetailsSignUp} />
            <Route path="/signout" component={SignOut} />
            <Route path="/article" component={FullArticle} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
