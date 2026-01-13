const axios = require('axios');

const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({
      error: 'Title query parameter is required'
    });
  }

  try {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: 'Failed to fetch movies'
    });
  }
};

const getMovieDetails = async (req, res) => {
  
};

module.exports = {
  searchMovies,
  getMovieDetails
};