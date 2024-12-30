import React from 'react'
import { useEffect,useState } from 'react'
import { Stack,Typography,TextField,Button,Box } from '@mui/material'
import {fetchData,exerciseOptions} from '../utils/fetchData'
import HorizontalScroll from './HorizontalScroll'
const SearchExercises = ({setExercise,setBodyPart,bodyPart}) => {
  const [search,setSearch]=useState('');
  const [bodyparts,setBodyParts]=useState([]);

  useEffect(()=>{
    const FetchBodyPart=async()=>{
      const bodyPart=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all',...bodyPart])
    }

    FetchBodyPart();
  },[])


  const handleClick=async()=>{
    if(search){
      const exercises=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exercises.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('')
    }
  }

  return (
    <Stack alignItems='center' p='5vh' mt='5vh' justifyContent='center'>
      <Typography fontWeight='700' fontSize={{lg:'3rem',sm:'2em',xs:'1em'}} mt='5vh' textAlign='center'>
        Awesome Exercise you <br/> should know
      </Typography>
      <Box position='relative' mb='5vh' mt='1vh'>
        <TextField height='5vh' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' sx={{input:{fontWeight:'600',borderRadius:'2vh',border:'none'},width:{lg:'75vw',xs:'60vw'}}} backgroundcolor='#fff'/>
          <Button onClick={handleClick} className='search-btn' sx={{bgcolor:'#ff2625' ,color:'white',textTransform:'none',width:{lg:'10vw',xs:'6vw'},height:'8vh',fontSize:{lg:'1.5em',xs:'1em'}, position:'absolute',right:'0'}}>
            Search
          </Button>
      </Box>
      <Box sx={{position:'relative',padding:'3vh',width:'100vw'}}>
        <HorizontalScroll data={bodyparts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises