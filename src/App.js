import React, { Component } from "react";
import Header from "./Header.js";
import TodoApp from "./TodoApp.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import TodoAppLogin from "./TodoAppLogin.js";


const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" render ={() =>
            isLoggedIn()
              ?<TodoApp/>
              :<Redirect to='login' />

            }/>
            <Route path='/login' component={TodoAppLogin}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
