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



  render(){
    return(
      <>
       <Header />
       <Inputs />
      </>
    )
  }
}

export default Task