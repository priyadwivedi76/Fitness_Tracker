import React from 'react'
import { useEffect,useState } from 'react'
import { Stack,Typography,TextField,Button,Box } from '@mui/material'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const SearchExercises = () => {
  const [search,setSearch]=useState();

  const handleClick=async()=>{
    if(search){
      const exerciseData=await fetchData()
    }
  }

  return (
    <Stack alignItems='center' p='10vh' mt='5vh' justifyContent='center'>
      <Typography fontWeight='700' fontSize={{lg:'3rem',sm:'2em',xs:'1em'}} mt='5vh' textAlign='center'>
        Awesome Exercise you <br/> should know
      </Typography>
      <Box position='relative' mb='5vh' mt='1vh'>
        <TextField height='5vh' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' sx={{input:{fontWeight:'600',borderRadius:'2vh',border:'none'},width:{lg:'75vw',xs:'60vw'}}} backgroundcolor='#fff' borderradius=''/>
          <Button onClick={handleClick} className='search-btn' sx={{bgcolor:'#ff2625' ,color:'white',textTransform:'none',width:{lg:'10vw',xs:'6vw'},height:'8vh',fontSize:{lg:'1.5em',xs:'1em'}, position:'absolute',right:'0'}}>
            Search
          </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises