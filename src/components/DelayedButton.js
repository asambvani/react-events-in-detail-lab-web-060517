// Code DelayedButton Component Here

import React from 'react'
import ReactDOM from 'react-dom'

class DelayedButton extends React.Component {
  constructor(props){
    super()
  }

  render(){
    return (
      <button onClick={this.clickFunction.bind(this)}/>
    )
  }

  clickFunction = (event) =>{
    event.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(event),this.props.delay
    })
  }
}

export default DelayedButton
