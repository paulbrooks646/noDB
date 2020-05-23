import React, {Component} from "react"


export default class Practice3 extends Component {
    constructor() {
        super()


        this.state = {
            userInput4: ""
        }
    }
handle(val) {
 
    this.setState({userInput4: val})
   
}

    render() {
        console.log(this.state.userInput4)
        const Billy = this.props.movieArray3.map(e => {console.log(e); console.log(e.name); console.log(e.id); console.log(e.rating); return <div key={e.id}><input onChange={e => this.handle(e.target.value)}/><button onClick={this.changeRating}>Change Rating</button></div>})
        return (
            <div>{Billy}</div>
        )
    }

}