import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TableList from '../Components/Table/TableList';
import { AuthContext } from '../utils/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(true);
  let {company,setCompany} = React.useContext(AuthContext)
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // console.log("super",company)
   React.useEffect(()=>{
    axios.get('http://localhost:8000/api/companylist/').then((response)=>{
      setCompany(response.data)
      console.log(response.data);
    })
    company.map((data)=>{
             console.log("check",data)
    })

  },[])
const slot = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
          <span style={{marginLeft:'10%',cursor:'pointer'}} onClick={()=>navigate('/admin/homepage')}>Home</span>
            <Divider sx={{ my: 1 }} />
            <span style={{marginLeft:'10%',cursor:'pointer'}} onClick={()=>navigate('/admin/list')}>Applicant</span>
            <Divider sx={{ my: 1 }} />
            <span style={{marginLeft:'10%',cursor:'pointer'}} onClick={()=>navigate('/admin/slotbook')}>Slot</span>
            <Divider sx={{ my: 1 }} />
           
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h2 style={{marginLeft:'5%'}}>Applicant List</h2>
            <Grid container spacing={3}>
              {/* Chart */}
              
              {/* Recent Deposits */}
              
              {/* Recent Orders */}
              <TableList arr={company} btnOne='open' btnTwo='pending'/>
             
            </Grid>
            
           
          </Container>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h2 style={{marginLeft:'5%'}}>Pending List</h2>
            <Grid container spacing={3}>
              {/* Chart */}
              
              {/* Recent Deposits */}
              
              {/* Recent Orders */}
              <TableList arr={company} btnOne='open' btnTwo='Approve' btnThree='Decline'/>
             
            </Grid>
            
            
           
          </Container>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h2 style={{marginLeft:'5%'}}>Approved List</h2>
            <Grid container spacing={3}>
              {/* Chart */}
              
              {/* Recent Deposits */}
              
              {/* Recent Orders */}
              <TableList arr={company} btnOne='open' status='approve'/>
             
            </Grid>
            
            
           
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function ApplicantList() {
  return <DashboardContent />;
}