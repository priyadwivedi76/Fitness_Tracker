import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material';
import Banner from '../assets/images/banner.png';
const HeroSection = () => {
  return (
    <Box sx={{mt:{lg:'25vh',sm:'20vh',xs:'15vh'},ml:{lg:'8vh',sm:'5vh'}}} position='relative' p='5vh'>
      <Typography color='#FF2625' fontWeight='600' fontSize='2em' sx={{fontSize:{sm:'1.8em',xs:'1.4em'}}}>
        Fitness Club
      </Typography>
      <Typography fontSize='4em' fontWeight='700' sx={{fontSize:{lg:'3em',sm:'2.8em',xs:'2.5em'}}} >
        Sweat,Smile <br/> repeat it.
      </Typography>
      <Typography fontSize='1.5em' fontWeight='500' mb='10px' lineHeight='40px' sx={{fontSize:{lg:'1.2em',sm:'1em',xs:'0.9em'}}} >
        Check Out the most Effective exercise.
      </Typography>
      <Button  variant="contained" color="error" href='#exercises' sx={{backgroundColor:'#ff2625',padding:'10px 20px'}}>
        Explore Now
      </Button>
      <Typography fontWeight='600' color='#ff2625' sx={{fontSize:{lg:'8em',sm:'3.5em',xs:'3em'},opacity:'0.1',display:{lg:'block',xs:'none'}}}>
        Exercises
      </Typography>
      <img src={Banner} className='hero-banner-img'/>
    </Box>
  )
}

export default HeroSection