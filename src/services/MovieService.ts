import { faker } from "@faker-js/faker";


// below function generates a fake data for the movie interface based on genre which includes #title # releaseDate #director and #rating
export const generateMovieData = (genre:String): MovieData => {
  // Generate random weather data
  const generatedMovieData = {
    // title of the movies 
    title: faker.lorem.words(3),
    //release date of the movie 
    releaseDate: faker.date.past(20).toISOString().split('T')[0], // Generating a past date within the last 20 years
     genre:[genre],
  
    // movies director name 
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    // rating of teh moveiw 
    rating: faker.number.float({ min: 0, max: 10, precision: 0.1 }),
  };
  // Return weather data
  return generatedMovieData;
};

