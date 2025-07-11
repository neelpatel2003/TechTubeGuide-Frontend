import axios from 'axios';

export default axios.create({
   baseURL: 'https://techtubeguide-backend.onrender.com',
   headers: { "ngrok-skip-browser-warning": "true" }
});