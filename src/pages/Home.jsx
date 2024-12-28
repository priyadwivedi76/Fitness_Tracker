import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import Exercise from '../components/Exercise'
import SearchExercises from '../components/SearchExercises'
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercise,setExercise]=useState([]);
  return (
    <Box>
      <HeroSection/>
      <SearchExercises setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercise setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
} 

export default Home