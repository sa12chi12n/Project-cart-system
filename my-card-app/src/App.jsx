
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Update from './components/Update'
import Home from './components/Home'
import Error from './components/Error'



const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Update />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
