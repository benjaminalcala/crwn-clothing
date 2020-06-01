import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth, createUserProfileDoc} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import './App.css';



class App extends React.Component{


  unsubsribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
    return(
      <div>
      <Header />
      <Switch>
        <Route exact path= '/' component={HomePage}/>
        <Route path= '/shop' component={ShopPage}/>
        <Route path= '/signin' render={()=> this.props.currentUser?(<Redirect to='/'/>): (<SignInAndSignUpPage />)}/>
      </Switch>
      </div>
     
    )
  }
}

const mapStateToProps = ({user: {currentUser}}) => ({
  currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);