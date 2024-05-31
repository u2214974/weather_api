import express from "express";
import { getMovieData } from "../controllers/moviesController.js";
import { validateGenre } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:genre", validateGenre, getMovieData);

// We will export the router
export default router;
