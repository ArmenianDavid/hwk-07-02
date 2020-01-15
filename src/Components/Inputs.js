import React from 'react'
// Components
import './Inputs.css'

const Input = (props) =>{
   return(
     <div className='input-part'>
       <div className='left-input-container'>
          <input type='text' className='input'/>
       </div>

       <div className='right-input-container'>
          <input type='text' className='input' />
       </div>
     </div>
   )
}

export default Input