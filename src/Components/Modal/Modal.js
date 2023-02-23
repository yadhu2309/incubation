import * as React from 'react';
import Box from '@mui/material/Box';
import {Button,MenuItem} from '@mui/material';
import {Typography, TextField} from '@mui/material';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../../utils/AuthContext';
import axios from 'axios';

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  let {company,setCompany,slotCheck,setSlotCheck} = React.useContext(AuthContext)
  // const inputRef = React.useRef(null);
  
  const [name,setName] = React.useState('')

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =(e)=>{
     setName(e.target.value);
     console.log("change",name);
  }
  const handleSubmit=(value)=>{
    let arr = []
    // console.log(inputRef.current.value);
    axios.put(`http://localhost:8000/api/book/${name}`,{
      slot:value
    }).then((response)=>{
      console.log(response)
      setCompany(response.data)
      // company.map((data)=>{
      //   console.log("verify",data)
      // })
    })
    // company.map((data,index)=>{
    //   console.log("verify",data)
    //     // if(data.slot=='False'){
    //     //   arr.push(data.slot)
    //     // }
    // })
    
    console.log(company);
    // company.map((data)=>{
    //   console.log("superdata",data)
    //   if(data.slot!='False')
    //   { 
    //     console.log("slot",data.slot);
    //     arr.push(data.slot)}
    // })
    // console.log("danger",arr)
  };

  
  return (
    <div>
      <Button variant="contained" size="small" style={{color:'white',display:'flex',textAlign:'center'}} onClick={()=>{handleOpen();}}>Book Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal{props.value}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
          </Typography>
          <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          name='selectCompany'
          // ref={inputRef}
          defaultValue={name}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your company"
          // variant="filled"
        ><option>Select</option>
          <>{company.map((data,index) => (
           <> {data.slot==='False' && data.Approve?
            <option key={index}>
              
              {data.CompanyName}
            </option>:''}</>
          ))}</>
        </TextField>
        {name==='Select' || !name ?null:<Button onClick={()=>{handleSubmit(props.value);handleClose()}}>submit</Button>}
        </Box>
      </Modal>
    </div>
  );
}