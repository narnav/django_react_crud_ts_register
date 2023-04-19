import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Products = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/products'
    const [msg, setmsg] = useState("")
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) { setmsg("welcome  data..."); }
        else { setmsg("need 2 login"); }

        if (token) {
            console.log(token);
            const headers= {
                'Authorization': `Bearer ${token}`
            }
            axios.get(MY_SERVER, {headers}).then(res => console.log(res.data))
        }
    }, [])

    return (
        <div>

            <h1>{msg}</h1>

        </div>
    )
}

export default Products