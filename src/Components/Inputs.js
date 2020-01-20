import React from 'react'
// Components
import './Inputs.css'


class Input extends React.Component{
   constructor(props){
      super(props)
      this.state ={
         inputColor : '',
         inputBgColor : '',
         isValidColor : true ,
         isValidBgColor : true ,
      }
   }
   

   handleInputChange = event => {

      if (event.target.id === "inputColor") {
         let isOk = /^#([0-9A-F]{3}){1,2}$/i.test(event.target.value) || event.target.value  === '';
        return this.setState({ isValidColor : isOk , inputColor: event.target.value},
            ()=>this.props.handleInput("inputColor" , this.state.inputColor )
            ) 
         
      } else if (event.target.id === "inputBgColor" ) {
         let isOk = /^#([0-9A-F]{3}){1,2}$/i.test(event.target.value) || event.target.value === '';
        return this.setState({ isValidBgColor : isOk , inputBgColor: event.target.value},
            ()=>this.props.handleInput("inputBgColor" , this.state.inputBgColor )
            )
      }
  };


   render(){
     const  { isValidColor , isValidBgColor } = this.state
     console.log(localStorage)

   return(
     <div className='input-part'>
       <div className='left-input-container'>
          Color :
          <div>
             <input 
             value={localStorage.getItem('inputColor') ? localStorage.getItem('inputColor') : ''}
             style={{ border : `1px solid ${isValidColor ? 'green' : 'red'}`}}
             type='text' 
             className='input' 
             id='inputColor' 
             placeholder='Start with #' 
             onChange={(e)=>this.handleInputChange(e )}/>
          </div>
       </div>

       <div className='right-input-container'>
          BgColor :
          <div>
             <input 
             value={localStorage.getItem('inputBgColor') ? localStorage.getItem('inputBgColor') : ''}
             style={{ border : `1px solid ${isValidBgColor ? 'green' : 'red'}`}}
             type='text' 
             className='input'
             id='inputBgColor'
             placeholder='Start with #' 
             onChange={(e)=>this.handleInputChange(e )} />
          </div>
       </div>
     </div>
   ) 
   }
   
}

export default Input