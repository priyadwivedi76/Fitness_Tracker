import React from 'react'
import {Stack,Typography} from '@mui/material'
import icons from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' sx={{borderTop:bodyPart===item?'2px solid #ff2625':'',backgroundColor:'#fff',borderBottomLeftRadius:'20px',height:'20vh',width:'15vw',cursor:'pointer',gap:'40px'}}>
        <img src={icons} alt="icon" style={{width:'8vw',height:'8vh'}}/>
    </Stack>
  )
}

export default BodyPart;