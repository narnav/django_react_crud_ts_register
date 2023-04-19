import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Login = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/login/'
    const [username, setusername] = useState("")
    const [password, setpasswrod] = useState("")
    const doLoginn=()=>{
        console.log(username,password);
        
        axios.post(MY_SERVER, {
            username,
            password
          }).then(res => localStorage.setItem("token",res.data.access))
          
    }
  return (
    <div>Login
        User name :<input onChange={(e)=>setusername(e.target.value)}/>
        Password :<input type="password" onChange={(e)=>setpasswrod(e.target.value)}></input>
        <button onClick={()=>doLoginn()}>login</button>
    </div>
  )
}

export default Login