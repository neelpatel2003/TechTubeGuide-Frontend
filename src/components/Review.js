import React from 'react'
import '../Design/Review.css'
function Review() {
   return (
      <div className="review-card">
         <div className="review-avatar">
            <i className="fas fa-user"></i>
         </div>
         <h2 className="review-title">John Doe</h2>
         <p className="review-content">I really enjoyed this course. It was informative and well-structured. The instructor was great!</p>
         <p className="review-rating">Rating: 4.5/5</p>
      </div>
   )
}

export default Review
