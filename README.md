Overview

The Movie Finder API is a backend application built with Node.js and Express that allows users to search for movies and fetch detailed information using the OMDb API. The project demonstrates building a RESTful API with route handling, controller logic, external API integration, and error handling. Users can search for movies by title and retrieve full movie details by IMDb ID.

Features

Search movies by title (/api/search?title=...)
Retrieve detailed movie information by IMDb ID (/api/movies/:id)
JSON responses for easy consumption by front-end applications
Graceful error handling (missing query parameters, API errors)
Fully modular project structure (routes, controllers)

Tech Stack

Node.js – JavaScript runtime
Express – Web framework for routing and server setup
Axios – HTTP client for fetching data from OMDb API
dotenv – Environment variable management
Nodemon – Automatically restarts server on file changes (development)
OMDb API – Free movie database API

API Endpoints

1. Search Movies
GET /api/search?title=movie_title
Query Parameters:
title (string, required) – Movie title to search
Response: JSON array of movies with basic info
Errors:
400 Bad Request if title is missing
500 Internal Server Error if OMDb request fails

2. Movie Details
GET /api/movies/:id
Route Parameters:
id (string, required) – IMDb ID of the movie
Response: JSON object with detailed movie info:
Errors:
500 Internal Server Error if OMDb request fails

Responsibilities

movieController.js
Handles API requests to OMDb
Validates query parameters
Returns JSON data to client
Catches and logs errors

movieRoutes.js
Defines /api/search and /api/movies/:id routes
Connects routes to controller functions
Error Handling
Returns 400 when required query parameters are missing
Returns 500 for external API failures or server errors
Logs errors to the console for debugging

Notes

Currently backend-only; no front-end UI
OMDb API key is required (free plan available)
JSON responses can be consumed by front-end applications or Postman
