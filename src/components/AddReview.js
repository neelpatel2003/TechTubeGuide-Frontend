import React from 'react'
import '../Design/AddReview.css'
function AddReview() {
   return (
      <div className="container d-flex justify-content-center align-item-center">
         <div className="review-form">
            <h2>Add Your Review</h2>
            <form>
               <label for="name">Your Name</label>
               <input type="text" id="name" name="name" required />

               <label for="review">Your Review</label>
               <textarea id="review" name="review" rows="4" required></textarea>

               <label for="rating">Rating (1-5)</label>
               <input type="number" id="rating" name="rating" min="1" max="5" required />

               <button type="submit">Submit Review</button>
            </form>
         </div>
      </div>
   )
}

export default AddReview
