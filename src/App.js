import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Header from './components/Header/Header';
import { LoginPage } from './pages/LoginPage/LoginPage';


export default class App extends Component {
  state = {
    currentUser: null,
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={this.state.currentUser} />
          <Route exact path='/login'>
            <LoginPage currentUser={this.state.currentUser}/>
          </Route>
          
        </Switch>
      </>
    )
  }
}
