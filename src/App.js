import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import {auth} from './firebase'
import Widget from './Widget';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
         //user is logeed
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else{
        //user is logged out
        dispatch(logout())
      }
     
    })
  }, [])

  return (
    <div className="App">
        <Header />

        {!user ? 

        <Login />
         : 
         (
          <div className="app__body">
            <Sidebar />
            {/* Feed*/}
            <Feed />
            {/* Widget */}
            <Widget />
          </div> 
          ) }

       
        
    </div>
  );
}

export default App;

