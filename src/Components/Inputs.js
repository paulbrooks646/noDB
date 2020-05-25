import React, { Component } from "react"

export default class Inputs extends Component {
    constructor(){
    super()

    this.state = {
        userInput: ""
    }
}




handle(val) {
    this.setState({userInput: val})
}

render() {
return (
    <div className="sweet">
        <input placeholder="New Rating" onChange={e => this.handle(e.target.value)} value={this.state.userInput} /> <button onClick={() => {
            this.props.handleChangeRating(this.state.userInput, this.props.id)
            this.setState({userInput: ""})
            }}>Change Rating
            </button>
    </div>
        )

}



 
}


