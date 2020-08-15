// type fuelType = "petrol" | "diesel" | "gas";

// interface CarConfiguration {
//   color: string;
//   noOfDoor: number;
//   brand: string;
//   engineCC: number;
// }

class Movies {
  title: string;
  studio: string;
  rating: string;

  constructor(
    movieTitle: string,
    studioName: string,
    movieRating: string = "PG"
  ) {
    this.title = movieTitle;
    this.studio = studioName;
    this.rating = movieRating;
  }
  getPG(moviesList) {
      let PGMovies =[];
      for(let i=0;i<moviesList.length;i++){
          if(moviesList[i].movieRating=="PG"){
              PGMovies+=moviesList[i].movieTitle;
          }
      }
      return PGMovies;
  }
}

let movie =new Movies("xfgd","hgxfgxd","hxdfg");

let rate =movie.getPG([{"movieTitle":"AAA","studioName":"EON","movieRating":"PG"},{"movieTitle":"BBB","studioName":"ENx","movieRating":"PG1"}])
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
