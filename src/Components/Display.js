import React from "react"
import Practice3 from "./newRating"
function Practice(props) {

const movieLists = props.movieArrays.map((e, index) => {
    return <div key={index}><h3 className="index">{e.id}</h3><h2>{e.name}</h2><h3 class="rating">{e.rating}</h3><button onClick={() => props.deleteMovie(e.id)}>Delete</button></div>
})

    return (
        <div className="parent">
            <div className="movie">{movieLists}</div>
            <div className="child">
                <Practice3 changeRating={props.changeRating} movieArray3={props.movieArrays}/>
                
            </div>
        </div>
    )
    }

    export default Practice


    