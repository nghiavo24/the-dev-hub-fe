import React, {useState} from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const App = () => {
  const [authorizedUser,setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"))

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
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
        <>
          <p>Authorized user</p>
          <button onClick={logoutUser}>Logout Button</button>
        </>
      ): (
        <>
      <button onClick={signInwithGoogle}>SignWithGoogle</button>
        </>
      )}
    </div>
  )
}

export default App