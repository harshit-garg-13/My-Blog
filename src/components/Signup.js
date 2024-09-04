import { useState } from 'react';
import React  from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [credential,setCredential]=useState({name:"",email:"",password:"",cpassword:""});
  let navigate=useNavigate();
  const {name,email,password,cpassword}=credential;

      const handleSubmit= async(e)=>{
        if(password!==cpassword){
          return (alert("Password and Confirm password do not match"));
        }
          e.preventDefault();
           const response= await fetch(`https://mynotebook-lubo.onrender.com/api/auth/createuser`,{
              method:'POST',
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({name,email,password})
           })
           const json=await response.json()
           if(json.success)
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onChange}  aria-describedby="emailHelp" required/>
  </div>  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email"  onChange={onChange}  aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange}  id="password" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="cpassword" className="form-control" name="cpassword"  onChange={onChange} id="cpassword" minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
