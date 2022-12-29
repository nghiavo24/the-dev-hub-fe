import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Tasks from "./components/Tasks";
import ApplicationDetails from './components/ApplicationDetails';
import ApplicationCreate from './components/ApplicationCreate';

const App = () => {

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const [authorizedUser,setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"))

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn)=>{
            // set access token in session storage
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
          })
        }
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    }

    const logoutUser = () => {
      signOut(auth).then(() => {      
        // clear session storage
        sessionStorage.clear();
        setAuthorizedUser(false);
        // window.location.replace("/");
        alert('Logged Out Successfully');
      }).catch((error) => {
        // An error happened.
        alert(error);
      });
    }
  return (
    <div>
      {authorizedUser ? (
        <div>
          <p>Authorized user</p>
          <h1>Tasks</h1>
          <Tasks token={sessionStorage.getItem("accessToken")}/>
          <button onClick={logoutUser}>Logout Button</button>
        </div>
      ): (
        <div>
      <button onClick={signInwithGoogle}>SignWithGoogle</button>
        </div>
      )}
      <Routes>
        <Route path='/appdetail/create' element={<ApplicationCreate/>}></Route>
      </Routes>
    </div>
  )
}

export default App