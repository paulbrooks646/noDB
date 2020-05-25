import React from "react"
import Line from "./Line.js"

function Header(props) {
   

         return (
    <div>
         <header>
              <img className="popcorn" src="https://f0.pngfuel.com/png/14/518/popcorn-illustration-png-clip-art.png" alt=""/>
              <h1 className="title">I-Rate</h1>
              <img className="icon" src="https://www.clipartmax.com/png/middle/1-15852_exp-movie-icon.png" alt=""/ >
          </header>
          <Line/>
     </div>
     )
}

export default Header