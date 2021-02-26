import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LogIn from '../LogIn/Login';
import Register from '../Register/Register';
import Questions from '../Questions/Questions';
import MainPage from '../MainPage/MainPage';
import TableResult from '../TableResult/TableResult';
import Navigation from '../Navigation/Navigation';

function App() {
  const [auth, setAuth] = useState(true);

  if (auth) {
    return (
      <div div className="App-auth">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/quest/:id">
              <Questions />
            </Route>
            <Route exact path="/result">
              <TableResult />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
  return (
    <div div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn setAuth={setAuth} />
          </Route>
          <Route exact path="/register">
            <Register setAuth={setAuth} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
