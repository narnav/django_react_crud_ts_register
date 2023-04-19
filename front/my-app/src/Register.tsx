import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Register = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/register'
    const [username, setusername] = useState("")
    const [password, setpasswrod] = useState("")
    const [email, setemail] = useState("")
    const doregister = () => {
        console.log(username, password);

        axios.post(MY_SERVER, {
            username,
            password,email
        }).then(res => localStorage.setItem("token", res.data.access))

    }
    return (
        <div>
            User name :<input onChange={(e) => setusername(e.target.value)} />
            email :<input onChange={(e) => setemail(e.target.value)} />
            Password :<input type="password" onChange={(e) => setpasswrod(e.target.value)}></input>
            <button onClick={() => doregister()}>Register</button>



        </div>
    )
}

export default Register