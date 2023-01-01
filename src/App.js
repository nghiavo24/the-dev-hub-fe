import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import MyHub from './components/MyHub';
import MainHub from './components/MainHub';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/mainhub' element={<MainHub />} />
          <Route path='/myhub' element={<MyHub />} />
      </Routes>
    </div>
  )
}

export default App