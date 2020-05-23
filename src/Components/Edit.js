import React, { Component } from "react"
import axios from "axios"



export default class Edit extends Component {
    constructor() {
        super()

this.state= {
    movieArray: [],
    userInput: ""
}

    }
    componentDidMount(){
        axios.get("/api/Movies").then(res => {
            console.log(res.data)
            this.setState({movieArray: res.data})})}

    handle1(val) {
        this.setState({userInput: val})
        console.log(this.state.userInput)
    }
changeRating() {

}
    


    render() {
        return (
            <div>
             <h2></h2>
             <input onChange={e => this.handle1(e.target.value)}/>
             <button onClick={this.changeRating}></button>
             <button></button>
         
            </div>
        )
    }
}