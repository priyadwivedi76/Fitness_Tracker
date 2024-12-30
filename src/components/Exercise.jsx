import React,{useState,useEffect} from 'react'
import  Pagination  from '@mui/material/Pagination'
import { Box,Stack,Typography } from '@mui/material'
import {fetchData,exerciseOptions} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercise = ({exercise,setExercise,bodyPart}) => {
  return (
    <Box id='exercises' sx={{mt:{lg:'5vh'}}} mt='2vh' p='3vh'> 
     <Typography variant='h3' fontWeight='600' mb='2vh'>Showing Results</Typography>
     <Stack direction='row' sx={{gap:{lg:'5vh',s:'3vh',xs:'2vh'}}} flexWrap='wrap' justifyContent='center'>
      {exercise.map((exercise,index)=>{
        return(
          <>
          <ExerciseCard exercise={exercise} key={index}/>
          </>
        )
      })}
     </Stack>
    </Box>
  )
}

export default Exercise