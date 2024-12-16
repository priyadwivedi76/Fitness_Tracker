import React from 'react';
import './App.css'
import {Box} from '@mui/material'
import  {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import ExerciseDetails from './pages/ExerciseDetails.jsx'
import NavBar from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';

function App() {

  return (
    <>
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
    </>
  )
}

export default App
