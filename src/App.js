import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import MyHub from './components/MyHub';
import MainHub from './components/MainHub';
import ApplicationDetail from './components/ApplicationDetails'
import NoteCreate from './components/NoteCreate';
import Navbar from './components/Navbar';
import PostingCreate from './components/PostingCreate';
import ApplicationCreate from './components/ApplicationCreate';
import ApplicationUpdate from './components/ApplicationUpdate';

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/mainhub' element={<MainHub />}/>
          <Route path='/mainhub/posting/create' element={<PostingCreate />}/> 
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