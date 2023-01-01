import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import MyHub from './components/MyHub';
import MainHub from './components/MainHub';
import ApplicationDetail from './components/ApplicationDetails'
import NoteCreate from './components/NoteCreate';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/mainhub' element={<MainHub />} />
          <Route path='/myhub' element={<MyHub />} />
          <Route path='/myhub/application/:id' element={<ApplicationDetail />} />
          <Route path='/myhub/application/:id/note/add' element={<NoteCreate />}/>
      </Routes>
    </div>
  )
}

export default App