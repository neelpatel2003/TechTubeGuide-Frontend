import React from 'react'
import { useEffect, useState } from 'react';
import Review from './Review'
import api from '../api/axiosConfig';
function Reviews() {
   const [reviews, setReviews] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchReviews() {
         try {
            const response = await api.get('/review');
            setReviews(response.data);
         } catch (err) {
            setError('Failed to load reviews.');
         } finally {
            setLoading(false);
         }
      }
      fetchReviews();
   }, []);

   if (loading) return <div className="container text-center">Loading reviews...</div>;
   if (error) return <div className="container text-center text-danger">{error}</div>;

   return (
      <div className="container text-center d-flex justify-content-center">
         <div className="row-cols-1">
            {reviews.length > 0 ? reviews.map((review, idx) => (
               <Review key={review.id || idx} user={review.user} description={review.description} rating={review.rating} />
            )) : <div>No reviews yet.</div>}
         </div>
      </div>
   )
}

export default Reviews
