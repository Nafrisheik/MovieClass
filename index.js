// type fuelType = "petrol" | "diesel" | "gas";
// interface CarConfiguration {
//   color: string;
//   noOfDoor: number;
//   brand: string;
//   engineCC: number;
// }
var Movies = /** @class */ (function () {
    function Movies(movieTitle, studioName, movieRating) {
        if (movieRating === void 0) { movieRating = "PG"; }
        this.title = movieTitle;
        this.studio = studioName;
        this.rating = movieRating;
    }
    Movies.prototype.getPG = function (moviesList) {
        var PGMovies = [];
        for (var i = 0; i < moviesList.length; i++) {
            if (moviesList[i].movieRating == "PG") {
                PGMovies += moviesList[i].movieTitle;
            }
        }
        return PGMovies;
    };
    return Movies;
}());
var movie = new Movies("xfgd", "hgxfgxd", "hxdfg");
var rate = movie.getPG([{ "movieTitle": "AAA", "studioName": "EON", "movieRating": "PG" }, { "movieTitle": "BBB", "studioName": "ENx", "movieRating": "PG1" }]);
console.log(rate);
// let car = new Car({
//   color: "white",
//   noOfDoor: 2,
//   brand: "BMW",
//   engineCC: 1000,
// });
// car.getData("red", 4, "alto", "gas");
// car.getData("red", 4, "alto");
// console.log(car.color);
