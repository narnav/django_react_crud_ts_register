import React from 'react'
import { Link } from 'react-router-dom'

const MyNav = () => {
    const logout=()=>{
        localStorage.clear()
    }
  return (
    <div>
        
        <Link to="/products">products</Link> |{" "}
        <Link to="/login">Login</Link>|{" "}
        <Link to="/admin">Admin</Link>|{" "}
        <Link to="/register">Register</Link>|{" "}
        <a href="" onClick={()=>logout()}>Logout</a>

    </div>
  )
}

export default MyNav