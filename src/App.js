import React, { useState } from 'react'
import { Route, Routes, useNavigate, } from 'react-router-dom';
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
import Footer from './components/Footer'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const App = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const[authorizedUser, setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"));
  const[uid, setUid] = useState();
  const[displayName, setDisplayName] = useState();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if(user){
          user.getIdToken().then((tkn, uid) => {
            sessionStorage.setItem("accessToken", tkn);
            setAuthorizedUser(true);
            console.log(user)
          })
        }
        setUid(user.uid)
        setDisplayName(user.displayName)
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
      navigate('/')
      alert('Byeee! 👋👋👋');
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <div>
      <Navbar displayName={displayName} logOutUser={logOutUser} signInWithGoogle={signInWithGoogle} authorizedUser={authorizedUser}/>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/mainhub' element={<MainHub uid={uid}/>}/>
          <Route path='/mainhub/posting/create' element={<PostingCreate uid={uid}/>}/> 
          <Route path='/mainhub/posting/:id' element={<PostingDetails />} /> 
          <Route path='/myhub' element={<MyHub uid={uid}/>} />
          <Route path='/myhub/application/:id' element={<ApplicationDetail />}/>
          <Route path='/myhub/application/create' element={<ApplicationCreate uid={uid}/>}/>
          <Route path='/myhub/application/:id/update' element={<ApplicationUpdate />}/>
          <Route path='/myhub/application/:id/note/add' element={<NoteCreate />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App