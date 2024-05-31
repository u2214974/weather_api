import { Request, Response } from "express";
import {generateMovieData} from "../services/MovieService.js";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a city
p0?: stringp0: string * @param req the request object
 * @param res the response object
 */
export const getMovieData = async (req: Request, res: Response) => {
  // Check for validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Try to generate movie data
  try {
    // Extract genre from the request query
    const { genre } = req.params;

    if (!genre) {
      res.status(400).send("Genre is required");
      return;
    }

    // Generate movie data based on the genre
    const movieData = generateMovieData(genre);

    // Return the generated movie data as JSON
    res.status(200).json(movieData);
  } catch (error) {
    console.error("Error in generating movie data", error);
    res.status(500).send("Error in generating movie data");
  }
};
