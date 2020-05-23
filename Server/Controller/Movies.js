const movie = {id: 0, movie: "movie1", rating: "rating1"}
const Data = require("../Data")

let id = 11





module.exports = {
getMovieArray: (req, res) => {
    res.status(200).send(Data)
    console.log("Get end point")
},
postNewMovie: (req, res) => {
    const {name, rating} = req.body
    const newMovie = {id, name, rating}
    Data.push(newMovie)
    id++
    res.status(200).send(Data)
},
editRating: (req, res) => {
    const { movieId } = req.params
    const { newRating } = req.body
    const locateMovie = Data.findIndex((e) => e.id === +movieId)
    if(locateMovie === -1){
     return res.status(404).send("Movie not found")}
Data[locateMovie].rating = newRating
res.status(200).send(Data)
},
deleteMovie: (req, res) => {
    const { movieId } = req.params
    const locateMovie = Data.findIndex((e) => e.id === +movieId)
    if(locateMovie === -1) {
        return res.status(404).send(Data)
    }
    Data.splice(locateMovie, 1)
    res.status(200).send(Data)

}   
}
 