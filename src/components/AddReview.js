import React from 'react'
import '../Design/AddReview.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import api from '../api/axiosConfig';
function AddReview() {
   const [name, setName] = useState('');
   const [review, setReview] = useState('');
   const [rating, setRating] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
         // Adjust courseId as needed (hardcoded or from context)
         await api.post('/review', {
            Description: review,
            userName: name,
            courseId: 1, // Replace with actual courseId if available
            rating: rating
         });
         setSuccess('Review submitted successfully!');
         setName('');
         setReview('');
         setRating('');
      } catch (err) {
         setError('Failed to submit review.');
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className="container d-flex justify-content-center align-item-center">
         <div className="review-form">
            <h2>Add Your Review</h2>
            <form onSubmit={handleSubmit}>
               <label htmlFor="name">Your Name</label>
               <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />

               <label htmlFor="review">Your Review</label>
               <textarea id="review" name="review" rows="4" value={review} onChange={e => setReview(e.target.value)} required></textarea>

               <label htmlFor="rating">Rating (1-5)</label>
               <input type="number" id="rating" name="rating" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} required />

               <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Review'}</button>
            </form>
            {error && <div className="text-danger">{error}</div>}
            {success && <div className="text-success">{success}</div>}
         </div>
      </div>
   )
}

export default AddReview
