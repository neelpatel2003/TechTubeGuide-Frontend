import React from 'react'
import '../Design/Review.css'
import PropTypes from 'prop-types';
function Review({ user, description, rating }) {
   return (
      <div className="review-card">
         <div className="review-avatar">
            <i className="fas fa-user"></i>
         </div>
         <h2 className="review-title">{user}</h2>
         <p className="review-content">{description}</p>
         <p className="review-rating">Rating: {rating}/5</p>
      </div>
   )
}

Review.propTypes = {
  user: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Review
