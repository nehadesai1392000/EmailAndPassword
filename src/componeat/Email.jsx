import React from 'react'
import '../App.css';


const Email = ({email,myEmail}) => {
  return (
    <div className='email'>
        <input type="email" value={email}  onChange ={(i)=> myEmail(i) } placeholder='Email'/>
    </div>
  )
}

export default Email