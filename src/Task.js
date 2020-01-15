import React from 'react'
// Components
import Header from './Components/Header'
import Inputs from './Components/Inputs'
 
class Task extends React.Component{
  constructor(){
    super()
    this.state = {
       inputColor : '',
       inputBgColor : '',
    }
  }

  handleInputChange = (event ) =>{
     if(event.target.id === 'inputColor'){
       this.setState({
         inputColor : event.target.value
       })
     }else if(event.target.id === 'inputBgColor'){
      this.setState({
        inputBgColor : event.target.value
      })
     }
  }

  render(){
    return(
      <>
       <Header />
       <Inputs handleInputChange={this.handleInputChange} />
      </>
    )
  }
}

export default Task