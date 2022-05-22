import React, { Component } from 'react'
import loader from "./loading.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center mb-2'>
      <img src={loader} alt=".."/>
      </div>
    )
  }
}
