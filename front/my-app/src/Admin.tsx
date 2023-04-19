import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Admin = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/products'
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    const [myProds, setmyProds] = useState([])
    const [refreshFlag, setrefreshFlag] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const headers= {
                'Authorization': `Bearer ${token}`
            }
            axios.get(MY_SERVER, {headers}).then(res => setmyProds(res.data))
        }
    }, [refreshFlag])

    const createNewProduct=()=>{
        const token = localStorage.getItem('token')
        if (token) {
            const headers= {
                'Authorization': `Bearer ${token}`
            }
        axios.post(MY_SERVER,{desc,price},{headers}).then(res => setrefreshFlag(!refreshFlag));
    }}
    const delProduct=(id:string)=>{
        const token = localStorage.getItem('token')
        if (token) {
            const headers= {
                'Authorization': `Bearer ${token}`
            }
        axios.delete(`${MY_SERVER}/${id}`,{headers}).then(res => setrefreshFlag(!refreshFlag));
    }}
    const updProduct=(id:string)=>{
        const token = localStorage.getItem('token')
        if (token) {
            const headers= {
                'Authorization': `Bearer ${token}`
            }
        axios.put(`${MY_SERVER}/${id}`,{desc,price},{headers}).then(res => setrefreshFlag(!refreshFlag));
        
    }}
  return (
    <div>
        Desc:<input  onChange={(e)=>setdesc(e.target.value)}/>
        Price:<input onChange={(e)=>setprice(+e.target.value)}/>
        <button onClick={()=>createNewProduct()}>Add</button>
        <hr></hr>
        {myProds.length}
        {myProds.map((prod:any,ind)=> <div key={ind}>
            <button onClick={()=>delProduct(prod.id)}>Del</button>
            <button onClick={()=>updProduct(prod.id)}>upd</button> {prod.desc} , 
            {prod.price}
        </div>)}
    </div>
  )
}

export default Admin