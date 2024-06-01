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
export const generateMovieData = (genre: string): MovieData => {
  const generatedMovieData: MovieData = {
    title: getRandomItem(movieTitles),
    releaseDate: faker.date.past({ years: 20 }).toISOString().split('T')[0], // Updated syntax
    genre: [genre],
    director: `${faker.person.firstName()} ${faker.person.lastName()}`, // Updated namespace
    rating: faker.number.float({ min: 0, max: 10, multipleOf: 0.1 }), // Updated syntax
  };

  storeMovieData(generatedMovieData).catch(console.error);
  return generatedMovieData;
};

