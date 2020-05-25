import React, {Component} from "react"
import Inputs from "./Inputs"

export default class newRating extends Component {
    constructor() {
        super()


        this.state = {
            userInput: ""
        
        }
        this.handleChangeRating=this.handleChangeRating.bind(this)
    }


handle(val) {
 
    this.setState({userInput: val})
   
}

handleChangeRating(val, id) {
    this.props.changeRating(id, val)
    //this.setState({userInput: ""})
}

    render() {
        const changes = this.props.movieArray3.map(e => {return <div key={e.id} className="rChange">
            <Inputs handleChangeRating={this.handleChangeRating} id={e.id}/>
           
            </div>})
        return (
         <div>{changes}</div>
        )
    }

}