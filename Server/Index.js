const express = require("express")
const App = express()
const Movies = require("./Controller/Movies.js")
const SERVER_PORT = 4005

App.use(express.json())

App.get("/api/Movies.js", Movies.getMovieArray)
App.post("/api/Movies.js", Movies.postNewMovie)
App.put("/api/Movies.js:movieId", Movies.editRating)
App.delete("/api/Movies:movieId", Movies.deleteMovie)

App.listen(SERVER_PORT, () => console.log(`Watching movies on port ${SERVER_PORT}`)
)
