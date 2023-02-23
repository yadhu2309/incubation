import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../utils/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()
  

  let {user,setUser,authTokens,setAuthTokens} = useContext(AuthContext)
  const logout=()=>{
    setUser(null)
    setAuthTokens(null)
    localStorage.removeItem('authTokenUser')
    navigate('/')
  }
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'rgb(156, 39, 176)'   }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.username}{user.user_id}
            {/* username */}
            
              
            <Button size='medium'
             variant='contained'
              color='primary' 
               style={{marginLeft:'3%',marginRight:'3%'}}
               onClick={()=>{
                
                navigate('/user/homepage')
           }} 
               
               >Home</Button>
            <Button size='medium'
             variant='contained'
              color='primary' 
              onClick={()=>{
                
                navigate('/user/companyregisteration')
           }} 
            >Register</Button>
            
          </Typography>
         
          
          <Button variant='outlined' onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar