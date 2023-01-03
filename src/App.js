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
import {GoogleButton} from 'react-google-button'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-[240px] m-auto py-4'>
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