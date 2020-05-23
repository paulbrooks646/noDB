import React from "react"
import Practice3 from "./Practice3"

function Practice(props) {

const pigdog = props.movieArrays.map((e, index) => {
    return <div key={index}><h3>{e.id}</h3><h2>{e.name}</h2><h3>{e.rating}</h3><button onClick={() => props.deleteMovie(e.id)}>Delete</button><Practice3 changeRating={props.changeRating} movieArray3={props.movieArrays}/></div>
})

    return (
        <div>{pigdog}</div>
    )
    }

    export default Practice


    