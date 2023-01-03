import React from 'react'
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
import {GoogleButton} from 'react-google-button';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const App = () => {
  const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  const[authorizedUser, setAuthorizedUser] = useState(falae || sessionStorage.getItem("accessToken"));

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

  return (
    <div>
      <Navbar />
      <div 
      onClick={signInWithGoogle}
      className='max-w-[240px] m-auto py-4'>
        <GoogleButton />
      </div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/mainhub' element={<MainHub />}/>
          <Route path='/mainhub/posting/create' element={<PostingCreate />}/> 
          <Route path='/mainhub/posting/:id' element={<PostingDetails />} /> 
          <Route path='/myhub' element={<MyHub />} />
          <Route path='/myhub/application/:id' element={<ApplicationDetail />}/>
          <Route path='/myhub/application/create' element={<ApplicationCreate />}/>
          <Route path='/myhub/application/:id/update' element={<ApplicationUpdate />}/>
          <Route path='/myhub/application/:id/note/add' element={<NoteCreate />}/>
      </Routes>
    </div>
  )
}

export default App