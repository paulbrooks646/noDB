import React, {Component} from 'react';
import './App.css';
//import Display from "./Components/Display.js"
import Header from "./Components/Header.js"
import Instructions from "./Components/Instructions.js"
import axios from "axios"
//import Edit from "./Edit.js"
import Practice from "./Components/Practice"
import Practice2 from "./Components/Practice2"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movieArray: []

    } 

this.addMovie = this.addMovie.bind(this)
this.changeRating = this.changeRating.bind(this)
this.deleteMovie = this.deleteMovie.bind(this)
    }


componentDidMount(){ 
  axios.get("/api/Movies").then(res => {
  this.setState({movieArray: res.data})})}


addMovie(name, rating){
  const body = {name, rating}
  axios.post("/api/Movies", body).then(res => {
    this.setState({movieArray: res.data})
  })
}
changeRating (id, newRating){
  const body = {newRating}
  axios.put(`/api/Movies/${id}`, body).then(res => {
    this.setState({movieArray: res.data})
  })
}
deleteMovie (id){
  axios.delete(`/api/Movies/${id}`).then(res => {
    this.setState({movieArray: res.data})
  })
}




render() {
  return (
    <div className="App">
      <Header/>
      <Instructions/>

      {/* <Display movieArray2={this.state.movieArray} addMovie={this.addMovie} changeRating={this.changeRating} deleteMovie={this.deleteMovie}/> */}
    
      
      <Practice changeRating={this.changeRating} addMovie={this.addMovie} movieArrays={this.state.movieArray} deleteMovie={this.deleteMovie}/>
      <Practice2 addMovie={this.addMovie} movieArrays={this.state.movieArray}/>
    </div>
  )
}
}


