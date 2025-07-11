import React from 'react'
import Review from './Review'
function Reviews() {
   return (
      <div className="container text-center d-flex justify-content-center">
         <div className="row-cols-1">
         <Review/>
         <Review/>
         <Review/>
         <Review/>
         <Review/>
         <Review/>
         </div>
      </div>
   )
}

export default Reviews
