import React, {Component} from 'react';
import './App.css';
import Display from "./Components/Display.js"
import Edit from "./Components/Edit.js"
import Header from "./Components/Header.js"
import Instructions from "./Components/Instructions.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      cow: "cow"
    } 
    }

render() {
  return (
    <div className="App">
      Pig
      {/* <Header/> */}
      {/* <Display/> */}
      {/* <Edit/> */}
      {/* <Instructions/> */}
    </div>
  )
}
}


