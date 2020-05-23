import React, { Component } from "react"
import axios from "axios"
import Edit from "./Edit.js"
import Instructions from "./Instructions"

export default class Display extends Component {
    
    constructor() {
        super()
        console.log(this.props)

        this.state = {
            movieArray: []
        }
    }
componentDidMount(){
    axios.get("/api/Movies").then(res => {
        console.log(res.data)
        this.setState({movieArray: res.data})
        
    })
}


render() {
    let movieList = this.state.movieArray.map((element, index) => {return <div key={index} className="array"><div className="array2"><h2>{element.name}</h2><h3>Rating: {element.rating}</h3><input/><button>Change Rating</button><br></br><button>Delete Movie</button></div>{console.log({element})}</div>} )
            return (
                <div>{movieList}</div>
            )
        }
    }