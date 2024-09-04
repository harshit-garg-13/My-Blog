import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
const [credential,setCredential]=useState({email:"",password:""});
let navigate=useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
         const response= await fetch('https://mynotebook-lubo.onrender.com/api/auth/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credential.email,password:credential.password})
         })
         const json=await response.json()
         if(json.status)
            {
                localStorage.setItem('token',json.authtoken);
                navigate("/");
            }
            else
            {
              alert("Inavlid credentials");
            }
         console.log(json);
    }
    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credential.email} onChange={onChange} id="email" aria-describedby="emailHelp" name="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credential.password} onChange={onChange} id="password" name="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
