import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Button} from '@mui/material';
import axios from 'axios';
import { AuthContext } from '../../utils/AuthContext';
import OpenModal from '../OpenModal/OpenModal';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function TableList(props) {
  let {company,setCompany} = React.useContext(AuthContext)
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8000/api/change/${id}`).then((response)=>{
      setCompany(response.data)

    })

  }
  const handlePending = (e,id,value)=>{
    e.preventDefault()
    console.log("id",id)
    if(value==='pending'){
    axios.put(`http://localhost:8000/api/change/${id}`,{
      Pending:true,
    }).then((response)=>{
      setCompany(response.data)

    })
  }else{
    axios.put(`http://localhost:8000/api/change/${id}`,{
      Approve:true,
    }).then((response)=>{
      setCompany(response.data)

    })

  }
  


  }
  return (
    <TableContainer style={{marginLeft:'5%',marginTop:'2%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Campany Details</TableCell>
            {props.status?<TableCell align="right">Status</TableCell>:null}
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(props.arr)}
          {company.map((data)=>{
            console.log("l",data)
          })}
          {company.map((data,index) => (
           
            <TableRow key={index}>
               {data.Pending===false && props.btnTwo==='pending'?

             <><TableCell component="th" scope="row">
                {data.CompanyName}
              </TableCell>
              <TableCell align="right">{data.Name}</TableCell>
              
              <TableCell align="right">{props.btnTwo === 'pending'?<Button variant="contained" color='secondary' onClick={(e)=>{handlePending(e,data.id,props.btnTwo)}}>pending</Button>:
              props.status ?props.status:<Button variant="contained">Approve</Button>}</TableCell>
              <TableCell align="right"><OpenModal name={data.Name}
               address={data.Address} city={data.City} state={data.State}
                company={data.CompanyName} value={props.btnOne}></OpenModal></TableCell>
             {props.btnThree?<TableCell align="right"><Button variant="contained">{props.btnThree}</Button></TableCell>:null}</>
          :
          data.Pending===true && data.Approve===false && props.btnTwo==='Approve'?
             <><TableCell component="th" scope="row">
                {data.CompanyName}
              </TableCell>
              <TableCell align="right">{data.Name}</TableCell>
              
              <TableCell align="right">{props.btnTwo === 'pending'?<Button variant="contained" color='secondary' onClick={(e)=>{handlePending(e,data.id)}}>pending</Button>:
              props.status ?props.status:<Button variant="contained" color='success' onClick={(e)=>{handlePending(e,data.id,props.btnTwo)}}>Approve</Button>}</TableCell>
              <TableCell align="right"><OpenModal name={data.Name} address={data.Address} 
              city={data.City} state={data.State} company={data.CompanyName} 
              value={props.btnOne}></OpenModal></TableCell>
             {props.btnThree?<TableCell align="right"><OpenModal value={props.btnThree} check='check' id={data.id} action={handleDelete}></OpenModal></TableCell>:null}</>
             :data.Pending && data.Approve && props.status ?

             <><TableCell component="th" scope="row">
                {data.CompanyName}
              </TableCell>
              <TableCell align="right">{data.Name}</TableCell>
              
              <TableCell align="right">{props.btnTwo === 'pending'?<Button variant="contained" color='secondary'  onClick={(e)=>{handlePending(e,data.id)}}>pending</Button>:
              props.status ?props.status:<Button variant="contained" onClick={(e)=>{handlePending(e,data.id,props.btnTwo)}}>Approve</Button>}</TableCell>
              <TableCell align="right"><OpenModal name={data.Name} address={data.Address}
               city={data.City} state={data.State}
               company={data.CompanyName} value={props.btnOne}></OpenModal></TableCell>
             {props.btnThree?<TableCell align="right"><Button variant="contained" onClick={()=>{handleDelete(data.id)}}>{props.btnThree}</Button></TableCell>:null}</>:null

          }</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}