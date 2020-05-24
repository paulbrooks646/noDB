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
        const changes = this.props.movieArray3.map(e => {return <div key={e.id} className="rChange">
            <input  placeholder="New Rating" onChange={e => this.handle(e.target.value)}/>
            <button   onClick={() => this.props.changeRating(e.id, this.state.userInput4)}>Change Rating
            </button>
            </div>})
        return (
            <div>{changes}</div>
        )
    }

}