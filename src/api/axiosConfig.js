import axios from 'axios';

const baseURL = 'https://techtubeguide-backend.onrender.com' || 'http://localhost:8000';

export default axios.create({
   baseURL,
   headers: { "ngrok-skip-browser-warning": "true" }
});