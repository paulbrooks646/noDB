import React, {Component} from 'react';
import './App.css';
import Display from "./Components/Display.js"
import Header from "./Components/Header.js"
import Instructions from "./Components/Instructions.js"


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movieArray: []

    } 
    
this.displayMovieArray = this.displayMovieArray.bind(this)
this.addMovie = this.addMovie.bind(this)
this.changeRating = this.changeRating.bind(this)
this.deleteMovie = this.deleteMovie.bind(this)
    }


componentDidMount(){ console.log("Hola Amigo")}
displayMovieArray(){}
addMovie(id, name, rating){}
changeRating (id, newRating){}
deleteMovie (id){}




render() {
  return (
    <div className="App">
      <Header/>
      <Display displayMovieArray={this.displayMovieArray} movieArray2={this.state.movieArray} addMovie={this.addMovie} changeRating={this.changeRating} deleteMovie={this.deleteMovie}/>
      <Instructions/>
    </div>
  )
}
}


