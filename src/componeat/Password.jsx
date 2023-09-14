import React from 'react'
import '../App.css';


const password = ({password,myPassword}) => {
  return (
    <div className='password'>
    <input type="password" placeholder='Password' value={password} onChange ={(e)=> myPassword(e) } /></div>
  )
}

export default password