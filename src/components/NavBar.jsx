import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/images/logo.png'

const NavBar = () => {
    return(
        <>
        <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'128px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px'>
            <Link to='/'>
                <img src={logo} alt='logo' style={{width:'48px',height:'48px',margin:'0 20px'}}/>
            </Link>
            <Stack direction='row' gap='40px' fontSize='20px' alignItems='flex-end'>
                <Link to='/' style={{borderBottom:'3px #FF2625 solid'}}>Home</Link>
                <a href='/exercise' style={{textDecoration:'none',color:'#3A1212'}}>Exercise</a>
            </Stack>
        </Stack>
        </>
    )
}

export default NavBar