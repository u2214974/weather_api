import { faker } from "@faker-js/faker";
import { storeMovieData } from "../helpers/helper.js";


// a list of movie name since random generation generated wierd names 

const movieTitles = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "Fight Club",
  "The Matrix",
  "Goodfellas",
  "The Lord of the Rings",
  "Star Wars",
  "Jurassic Park",
  "Titanic",
  "The Lion King",
  "Back to the Future"
];
const getRandomItem = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

// below function generates a fake data for the movie interface based on genre which includes #title # releaseDate #director and #rating
export const generateMovieData = (genre:string): MovieData => {
  // Generate random weather data
  const generatedMovieData = {
    // title of the movies 
    title: getRandomItem(movieTitles),
    //release date of the movie 
    releaseDate: faker.date.past(20).toISOString().split('T')[0], // Generating a past date within the last 20 years
     genre:[genre],
  
    // movies director name 
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    // rating of teh moveiw 
    rating: faker.number.float({ min: 0, max: 10, precision: 0.1 }),
  };

  storeMovieData(generatedMovieData).catch(console.error);
  // Return weather data
  return generatedMovieData;
};

