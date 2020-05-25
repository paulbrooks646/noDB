import React, {Component} from "react"



export default class addMovie extends Component {
    constructor() {
        super()

this.state = {
    userInput: "",
    userInput2: ""
}
    }
    handle1(val) {
        this.setState({userInput: val})
    }
    handle2(val) {
        this.setState({userInput2: val})
    }
    
    render() {
        return (
    
               
        <div className="addition"><h2>Feel free to add a new movie:</h2>
            <input value={this.state.userInput}placeholder="Movie Name" onChange={e => this.handle1(e.target.value)}/>
            <input value={this.state.userInput2} placeholder="Rating" onChange={e => this.handle2(e.target.value)}/>
            <button onClick={()=>{
                this.props.addMovie
                (this.state.userInput, this.state.userInput2) 
                this.setState({userInput: "", userInput2: ""})
                }}>Add Movie
            </button>
        </div>
        )}}
