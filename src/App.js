import React, {useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Tasks from "./components/Tasks";
import ApplicationDetails from './components/ApplicationDetails';
import ApplicationCreate from './components/ApplicationCreate';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './components/Homepage'
 

const App = () => {
  const [authorizedUser,setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"))
  const isLoggedIn = false;
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to='/login' />;
  }

    // const logoutUser = () => {
    //   signOut(auth).then(() => {      
    //     // clear session storage
    //     sessionStorage.clear();
    //     setAuthorizedUser(false);
    //     // window.location.replace("/");
    //     alert('Logged Out Successfully');
    //   }).catch((error) => {
    //     // An error happened.
    //     alert(error);
    //   });
    // }
  console.log(isLoggedIn)
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<RequireAuth><Homepage /></RequireAuth>} />
          <Route path='login' element={<Login isLoggedIn={isLoggedIn} authorizedUser={authorizedUser}/>}/>
        </Route>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}

export default App

// {authorizedUser ? (
//   <div>
//     <p>Authorized user</p>
//     <h1>Tasks</h1>
//     <Tasks token={sessionStorage.getItem("accessToken")}/>
//     <button onClick={logoutUser}>Logout Button</button>
//   </div>
// ):