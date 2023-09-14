import React from 'react'
import '../App.css';


const Button = ({myBtn}) => {
  return (
    <div>
        <button onClick={myBtn}>click</button>
    </div>
  )
}

export default Button