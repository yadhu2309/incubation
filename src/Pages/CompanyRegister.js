import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import Navbar from '../Components/Navbar/Navbar';
import TextField from '@mui/material/TextField';
import { display } from '@mui/system';
import axios from 'axios';
import { AuthContext } from '../utils/AuthContext';
import { RestartAlt } from '@mui/icons-material';

export default function CompanyRegister() {
    let{user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data,e) => {
    console.log(data.Name);
    e.target.reset()
    axios.post('http://localhost:8000/api/company/',{
        Name:data.Name,
        City:data.City,
        Address:data.Address,
        State:data.State,
        Email:data.Email,
        Phone:data.Phone,
        CompanyName:data.CompanyName,
        TeamAndBackground:data.TeamAndBackground,
        CompanyAndProduct:data.CompanyAndProduct,
        PotentialMarket:data.PotentialMarket,
        uid:user.user_id,

    }).then((response)=>{
        console.log(response.data)
       
        // document.getElementById('rst').rest()
        // register({
        //     Name:'',
        //     City:'',
        //     Address:'',
        //     State:'',
        //     Email:'',
        //     Phone:'',
        //     CompanyName:'',
        //     TeamAndBackground:'',
        //     CompanyAndProduct:'',
        //     PotentialMarket:'',
        // })
    }).catch((error)=>{
        alert(error)
    })
}

//   console.log(watch("Name"));
  return (
    <div>
        <Navbar/>
        
     <div style={{display:'flex'}}>
     <div style={{marginTop:50,
     minWidth:'50%',width:'55%',
     marginLeft:'5%'
     }}>
        <form id='rst'  onSubmit={handleSubmit(onSubmit)}>
        <div style={{display:'flex',marginLeft:"5%",marginTop:10}}>
            <div style={{marginRight:'20%'}}>
              
                <TextField sx={{width:'150%'}}  id="standard-basic" label="Name" variant="standard"  {...register("Name")} />
            </div>
            <div>
                <TextField sx={{width:'150%'}} id="standard-basic" label="Address" variant="standard" {...register("Address", { required: true })} />
            </div>
        </div>
        <div style={{display:'flex',marginLeft:"5%",marginTop:10}}>
            <div style={{marginRight:'20%'}}>
                <TextField sx={{width:'150%'}} id="standard-basic" label="City" variant="standard" {...register("City", { required: true })} />
            </div>
            <div>
                <TextField sx={{width:'150%'}} id="standard-basic" label="State" variant="standard" {...register("State", { required: true })} />
            </div>
        </div>
     <div style={{display:'flex',marginLeft:"5%",marginTop:10}}>
        <div style={{marginRight:'20%'}}>
            <TextField sx={{width:'150%'}} id="standard-basic" label="Email" variant="standard" {...register("Email", { required: true })} />
        </div>
        <div>
            <TextField sx={{width:'150%'}} id="standard-basic" label="Phone" variant="standard" {...register("Phone", { required: true })} />
        </div>
     </div>
     
     <div style={{display:'flex',marginLeft:"5%",marginTop:10}}>
        <div>
            <TextField sx={{width:'150%'}} id="standard-basic" label="Company Name" variant="standard"   {...register("CompanyName", { required: true })} />
        </div>
        {/* <div>
            <label>Address</label><br/>
            <input {...register("Email", { required: true })} />
        </div> */}
     </div>
     <div style={{marginLeft:'5%',marginTop:10}}>
     <TextField sx={{width:'96%'}} id="standard-basic" label="Describe your Team and background" variant="standard"   {...register("TeamAndBackground", { required: true })} />
     </div>
     <div style={{marginLeft:'5%',marginTop:10}}>
     <TextField sx={{width:'96%'}} id="standard-basic" label="Describe your Company and Product" variant="standard"   {...register("CompanyAndProduct", { required: true })} />
     </div>
     <div style={{marginLeft:'5%',marginTop:10}}>
     <TextField sx={{width:'96%'}} id="standard-basic" label="What is the potential market size of the Product" variant="standard"   {...register("PotentialMarket", { required: true })} />
     </div>
     <div style={{marginLeft:'5%',marginTop:10}}>
     <TextField sx={{width:'96%'}} id="standard-basic" label="Explain your Revenue model" variant="standard"   {...register("ExplainRevenue", { required: true })} />
     </div>
     <div style={{marginLeft:'5%',marginTop:10}}>
     <TextField sx={{width:'96%'}} id="standard-basic" label="How do you market or plan to market your products" variant="standard"   {...register("PlanToMarket", { required: true })} />
     </div>
      
      
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      </form>
      </div>

      <div>
        <h1>Company</h1>
      </div>
</div>    
    </div>
  )
}
