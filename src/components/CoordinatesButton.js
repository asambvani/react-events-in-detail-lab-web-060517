// Code CoordinatesButton Component Here

import React from 'react'
import ReactDOM from 'react-dom'

class CoordinatesButton extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <button onClick={this.buttonClick}/>
    )
  }
  buttonClick =(event)=>{
    let x = event.clientX
    let y = event.clientY
    this.props.onReceiveCoordinates([x,y])
  }
}

export default CoordinatesButton
