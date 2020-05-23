import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header.js"
import Instructions from "./Components/Instructions.js"
import axios from "axios"
import Practice from "./Components/Display"
import Practice2 from "./Components/addMovie"

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
      <Practice changeRating={this.changeRating} addMovie={this.addMovie} movieArrays={this.state.movieArray} deleteMovie={this.deleteMovie}/>
      <Practice2 addMovie={this.addMovie} movieArrays={this.state.movieArray}/>
    </div>
  )
}
}


