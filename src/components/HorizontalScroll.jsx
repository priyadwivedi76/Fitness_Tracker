import React from 'react'
import {Box} from '@mui/material'
import BodyPart from './bodyPart'
import { VisibilityContext,ScrollMenu } from 'react-horizontal-scrolling-menu'
const HorizontalScroll = ({data,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu>
        {data.map((item,index)=>{
            return(
                <Box key={index} m="0 40px" display='flex'>
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                </Box>
            )
        })}
    </ScrollMenu>
  )
}

export default HorizontalScroll