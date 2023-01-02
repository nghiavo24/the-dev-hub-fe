import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import MyHub from './components/MyHub';
import MainHub from './components/MainHub';
import ApplicationDetail from './components/ApplicationDetails'
import NoteCreate from './components/NoteCreate';
import Navbar from './components/Navbar';
import logo from './media/thedevhub.png'
import PostingCreate from './components/PostingCreate';
import PostingDetails from './components/PostingDetails';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/mainhub' element={<MainHub />} />
          <Route path='/mainhub/posting/add' element={<PostingCreate />} /> 
          <Route path='/mainhub/posting/:id' element={<PostingDetails />} /> 
          <Route path='/myhub' element={<MyHub />} />
          <Route path='/myhub/application/:id' element={<ApplicationDetail />} />
          <Route path='/myhub/application/:id/note/add' element={<NoteCreate />}/>
      </Routes>
    </div>
  )
}

export default App