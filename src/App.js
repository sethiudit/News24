import './App.css';
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
/*859bb0b640584252967c91b39fd51a5b*/
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={9}/>
      </div>
    )
  }
}
