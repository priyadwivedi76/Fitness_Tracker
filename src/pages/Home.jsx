import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroSection from '../components/HeroSection'
import Exercise from '../components/Exercise'
import SearchExercises from '../components/SearchExercises'
const Home = () => {
  return (
    <Box>
      <HeroSection/>
      <SearchExercises/>
      <Exercise/>
    </Box>
  )
}

export default Home