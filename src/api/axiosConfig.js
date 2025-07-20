import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export default axios.create({
   baseURL,
   headers: { "ngrok-skip-browser-warning": "true" }
});