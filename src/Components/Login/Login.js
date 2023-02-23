import  React,{useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../utils/AuthContext';
import jwt_decode from 'jwt-decode';



const theme = createTheme();

export default function Login(props) {
  const navigate = useNavigate()
  let {authTokens,setAuthTokens,user,setUser,authTokensAdmin,setAuthTokensAdmin,admin,setAdmin} = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // fetch('http://127.0.0.1:8000/api/token/',{
    //   method:'POST',
    // headers:{
    //   'Content-type':'application/json',
    // },
    // body:JSON.stringify({
    //  username:data.get('username'),
    //  password:data.get('password'),


    // })
    // }).then((response)=>{
    //     return response.json()      
    // }).then((data)=>{
    //   console.log(data.status);
    //   navigate('/user/homepage')
    //   console.log(data);
    // })
    axios.post('http://127.0.0.1:8000/api/token/',{
      username:data.get('username'),
     password:data.get('password')
    }).then((response)=>{
      if(response.status==200){
        if(!(jwt_decode(response.data.access).is_superuser) && props.heading === 'USER LOGIN'){
        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))
        localStorage.setItem('authTokenUser',JSON.stringify(response.data))
         console.log(jwt_decode(response.data.access))
        navigate('/user/homepage')
      }
     else if((jwt_decode(response.data.access).is_superuser) && props.heading === 'ADMIN LOGIN'){
        setAuthTokensAdmin(response.data)
        setAdmin(jwt_decode(response.data.access))
        localStorage.setItem('authTokenAdmin',JSON.stringify(response.data))
         console.log(jwt_decode(response.data.access))
        navigate('/admin/list')
      }
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}