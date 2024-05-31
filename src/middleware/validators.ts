import { param  } from "express-validator";



const allowedGenres = ["action", "comedy", "drama", "horror", "thriller", "romance", "sci-fi", "fantasy"];
/**
 * Validates the genre query param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/movie-data",
 *  validateGenre,
 *  getMovieData
 * );
 */
export const validateGenre = param("genre")
  // We will use the isString method to check if the genre param is a string
  .isString()
  // Optionally, you can check if the genre is one of the allowed genres
  .custom(value => allowedGenres.includes(value.toLowerCase()))
  // with message method to genrate custom error 
  .withMessage("Genre must be one of the following: Action, Comedy, Drama, Horror, Thriller, Romance, Sci-Fi, Fantasy");