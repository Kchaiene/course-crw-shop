import React, {useEffect} from 'react';
import './App.css';
import HomePage from "./pages/Home/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignPage from "./pages/SignPage/SignPage";
import { auth, creatUserProfileDocument} from './firebase/firebase.utils';
import {checkUserSession, setCurrentUser} from "./redux/user/userActions";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from "./redux/user/userSelectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import FunctionComp from "./components/FunctionComp";
import CurrentUserContext from "./context/currentUser/currentUserContext";




function App({ currentUser, collections, dispatch }) {
    // const Get = async () => {const userRef =  firestore.doc(`users/BA3OPnhnbqgk8AupyOTQt6ruB5Q2`);
    //     const snapShot = await userRef.get();
    //     console.log("App - GET ", snapShot, '\n', userRef);
    // };
    console.log ('App RENDER');

    useEffect(  () => {
        dispatch(checkUserSession());
    }, [] );

    // useEffect(  () => {
    //    // Get();
    //     let onsubscribeFromSnapshot;

    //     let onsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //        if (userAuth) {
    //           let userRef = await creatUserProfileDocument(userAuth);
    //           onsubscribeFromSnapshot = userRef.onSnapshot( snapShot => {
    //               setCurrentUser({ id: snapShot.id, ...snapShot.data() })
    //           });
    //
    //        } else {
    //            setCurrentUser(null);
    //        }
    //
    //     });
    //     return () => {
    //         console.log('App Return' );
    //         if (typeof onsubscribeFromSnapshot === 'function') onsubscribeFromSnapshot();
    //         if (typeof onsubscribeFromAuth === 'function')onsubscribeFromAuth();
    //     };
    //     //eslint-disable-next-line
    // }, []);


  return (
      <div className={`App`}>

          <Route path={`/test`}  component={FunctionComp}/>
          <CurrentUserContext.Provider value={currentUser} >
              <Header />
          </CurrentUserContext.Provider>

          <Switch>
              <Route exact  path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact  path='/checkout' component={CheckoutPage} />

              <Route exact path='/signin' render={
                  ()=> currentUser ? (<Redirect to='/' />) : (<SignPage/>)}
              />

          </Switch>

      </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
 });





// const mapDispatchToProps = (dispatch, getState) => {
//      //console.log('APP mapDispatchToProps');
//     return {
//         setCurrentUser: user => dispatch(setCurrentUser(user))
//     }
// };


export default connect(mapStateToProps, )(App);
