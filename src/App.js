import React, { useState } from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import MyHub from './components/MyHub';
import MainHub from './components/MainHub';
import ApplicationDetail from './components/ApplicationDetails'
import NoteCreate from './components/NoteCreate';
import Navbar from './components/Navbar';
import PostingCreate from './components/PostingCreate';
import PostingDetails from './components/PostingDetails';
import ApplicationCreate from './components/ApplicationCreate';
import ApplicationUpdate from './components/ApplicationUpdate';
import About from './components/About';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const App = () => {
  const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const[authorizedUser, setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"));

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn) => {
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
            console.log(user)
          })
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }

  const logOutUser = () => {
    signOut(auth).then(() => {
      sessionStorage.clear();
      setAuthorizedUser(false);
      alert('Logged Out Successfully');
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <div>
      <Navbar />
      {authorizedUser ? (
        <div>
          <p>Authorized User</p>
          <MyHub token={sessionStorage.getItem("accessToken")}/>
          <button onClick={logOutUser}
          type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sign Out
          </button>
        </div>
      ): (
      <div 
      onClick={signInWithGoogle}
      className='max-w-[240px] m-auto py-4'>
        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Sign in with Google
        </button>
      </div>
      )}
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/mainhub' element={<MainHub />}/>
          <Route path='/mainhub/posting/create' element={<PostingCreate />}/> 
          <Route path='/mainhub/posting/:id' element={<PostingDetails />} /> 
          <Route path='/' element={<MyHub token={sessionStorage.getItem("accessToken")}/>} />
          <Route path='/myhub/application/:id' element={<ApplicationDetail />}/>
          <Route path='/myhub/application/create' element={<ApplicationCreate />}/>
          <Route path='/myhub/application/:id/update' element={<ApplicationUpdate />}/>
          <Route path='/myhub/application/:id/note/add' element={<NoteCreate />}/>
      </Routes>
    </div>
  )
}

export default App