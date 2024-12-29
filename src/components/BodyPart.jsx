import React from 'react'
import {Stack,Typography} from '@mui/material'
import icons from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' sx={{borderTop:bodyPart===item?'2px solid #ff2625':'',backgroundColor:'#fff',borderBottomLeftRadius:'20px',height:'28vh',width:'15vw',cursor:'pointer',gap:'40px'}} 
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800,left:1000,behavior:'smooth'})
    }}>
        <img src={icons} alt="icon" style={{width:'3vw',height:'5vh'}}/>
        <Typography fontSize='1.2em' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart;