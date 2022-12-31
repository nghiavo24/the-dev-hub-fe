import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import MyHub from './components/MyHub';


const App = () => {
  
  return (
    <div>
        <Routes>
          <Route path='/myhub' element={<MyHub />} />
      </Routes>
    </div>
  )
}

export default App