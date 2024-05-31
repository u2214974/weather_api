import express from "express";
import movieRouter from "./routes/movieRoute.js"; // Update to import the movie router
import cors from "cors"

// Create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use(cors())

// Define the route for movie data based on genre
app.use("/api/movies", movieRouter); // Update the base route path

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
