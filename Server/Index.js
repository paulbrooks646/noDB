const express = require("express")
const App = express()
const Movies = require("./Controller/Movies.js")
// const Data = require("./Data.js")
const SERVER_PORT = 4005

App.use(express.json())


App.get("/api/Movies", Movies.getMovieArray)
App.post("/api/Movies", Movies.postNewMovie)
App.put("/api/Movies/:movieId", Movies.editRating)
App.delete("/api/Movies/:movieId", Movies.deleteMovie)

App.listen(SERVER_PORT, () => console.log(`Watching movies on port ${SERVER_PORT}`)
)
