import React from 'react'
// Components
import './Inputs.css'

const Input = (props) =>{
   return(
     <div className='input-part'>
       <div className='left-input-container'>
          Color :
          <div>
             <input 
             style={{ border : `1px solid ${props.isValid ? 'green' : 'red'}`}}
             type='text' 
             className='input' 
             id='inputColor' 
             placeholder='Start with #' 
             onChange={(e)=>props.handleInputChange(e )}/>
          </div>
       </div>

       <div className='right-input-container'>
          BgColor :
          <div>
             <input 
             type='text' 
             className='input'
             id='inputBgColor'
             placeholder='Start with #' 
             onChange={(e)=>props.handleInputChange(e )} />
          </div>
       </div>
     </div>
   )
}

export default Input