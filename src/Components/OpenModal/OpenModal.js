import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OpenModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {props.check==='check'?
      <Button variant='contained' color='error' onClick={handleOpen}>{props.value}</Button>:
      <Button variant='contained' onClick={handleOpen}>{props.value}</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.check==='check'?<span>Dashboard</span>:
            
            <span>Detailed View</span>}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.check==='check'?<span>Are you want to decline this?</span>:
          <><TextField id="standard-basic" 
          defaultValue={props.name} 
          label="Name" style={{width:'100%'}} 
          variant="standard" 
          inputProps={
            { readOnly: true, }
        }/>
          <TextField id="standard-basic" 
          label="Address" style={{width:'100%'}}
           variant="standard" 
           defaultValue={props.address}
           inputProps={
            { readOnly: true, }
        } />
          <TextField id="standard-basic" 
          label="State" style={{width:'100%'}}
           variant="standard"
           defaultValue={props.state}
           inputProps={
            { readOnly: true, }
        } />
          <TextField id="standard-basic"
           label="City" style={{width:'100%'}} 
           variant="standard"
           defaultValue={props.city}
           inputProps={
            { readOnly: true, }
        } />
          <TextField id="standard-basic"
           label="Company Name"
            style={{width:'100%'}} 
            variant="standard"
            defaultValue={props.company}
           inputProps={
            { readOnly: true, }
        } /></>}
          </Typography>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            
          <Button variant='contained' style={{marginTop:'2%'}} onClick={handleClose}>Close</Button>
         {props.check==='check'?
         <Button variant='contained' style={{marginTop:'2%'}} onClick={()=>{handleClose();props.action(props.id)}}>Yes</Button> :
         <Button variant='contained' style={{marginTop:'2%'}} onClick={handleClose}>OK</Button>}
          </div>
        </Box>
      </Modal>
    </div>
  );
}