import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Header from './components/Header/Header';
import { auth, createFirebaseUser } from './firebase/firebase';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';


export default class App extends Component {
  state = {
    currentUser: null,
  }
  unsubscribebeAuth = null;

  componentDidMount () {

    this.unsubscribeAuth = auth.onAuthStateChanged( async (user) => {

      if (user) {
        const userRef = await createFirebaseUser(user);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });  
      } else {
        this.setState({currentUser: user});
      } 
    });   
  }

  componentWillUnmount () {
    this.unsubscribeAuth()
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
          <Route exact path='/register' >
            <RegisterPage currentUser={this.state.currentUser}/>
          </Route>
        </Switch>
      </>
    )
  }
}
