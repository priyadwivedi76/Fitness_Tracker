import React from 'react'
import { useEffect,useState } from 'react'
import { Stack,Typography,TextField,Button,Box } from '@mui/material'
const SearchExercises = () => {
  return (
    <Stack alignItems='center' p='10vh' mt='5vh' justifyContent='center'>
      <Typography fontWeight='700' fontSize={{lg:'3rem',sm:'2em',xs:'1em'}} mt='5vh' textAlign='center'>
        Awesome Exercise you <br/> should know
      </Typography>
      <Box position='relative' mb='5vh'>
        <TextField height='5vh' value='' onChange={(e)=>{}} placeholder='Search Exercises' type='text' sx={{input:{fontWeight:'600',borderRadius:'2vh',border:'none'},width:{lg:'80vw',xs:'60vw'}}} backgroundColor='#fff' borderRadius=''/>
          <Button>
            Search
          </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises