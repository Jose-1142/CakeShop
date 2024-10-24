import axios from 'axios'
import React, {useState } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3007/Login',{email,password})
        .then(res=>{
            if(res.data === 'welcome'){
                navigate('/')
            } else{
                setError(true)
            }
        })
        .catch(err=>{console.log(err)});
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>Submit</button>
            {error &&  <p>invaild user</p>}
        </form>
    </div>
  )
}