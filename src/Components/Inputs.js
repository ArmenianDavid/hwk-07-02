import React from 'react'
// Components
import './Inputs.css'

const Input = (props) =>{
   return(
     <div className='input-part'>
       <div className='left-input-container'>
          <input 
             type='text' 
             className='input' 
             id='inputColor' 
             onChange={(e)=>props.handleInputChange(e )}/>
       </div>

       <div className='right-input-container'>
          <input 
             type='text' 
             className='input'
             id='inputBgColor' 
             onChange={(e)=>props.handleInputChange(e )} />
       </div>
     </div>
   )
}

export default Input