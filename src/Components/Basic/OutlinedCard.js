import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal  from '../Modal/Modal';



const card = (
  <React.Fragment>
    
  </React.Fragment>
);

export default function OutlinedCard(props) {
  let colour=''
  {props.array.includes(props.value)? colour='#666464':colour='#ba4ddb'}
  return (
    <div>
     
    <Box sx={{marginLeft:3,marginTop:2,minHeight:150,minWidth:150 }}>
    
      <Card sx={{height:150,backgroundColor:`${colour}`}} variant="outlined">
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {/* Word of the Day */}
       
      </Typography>
      <Typography variant="h5" component="div">
       
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {/* adjective */}
      </Typography>
      <Typography variant="body2">
        {/* well meaning and kindly.
        <br />
        {'"a benevolent smile"'} */}
       
      </Typography>
    </CardContent>
    <CardActions>
   {/* {props.dataIndex} */}
      {/* <Button size="small">Learn More</Button> */}
      {/* {props.value} */}
      {props.array.includes(props.value)?<span style={{color:'white'}} >Already Booked</span>:

    
      <Modal value={props.value}/>}
    </CardActions>
      </Card>
    </Box>
    </div>
  );
}