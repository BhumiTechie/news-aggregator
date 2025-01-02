import axios from "axios";

// Get the API key from environment variables
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

// Fetch trending news
export const fetchTrendingNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching trending news:", error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

// Fetch news by topic
export const fetchNewsByTopic = async (topic) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${topic}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news by topic:", error);
    throw error;
  }
};

// Fetch latest news (General function for top-headlines)
export const fetchLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
};
