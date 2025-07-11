import React from 'react'
import '../Design/DescriptionOpen.css'
function DescriptionOpen(props) {
   return (
      <div className="card">
         <span className="card-icon"><i className="ri-information-fill visible"></i></span>
         <h2 className="card-title">Description</h2>
         <p className="card-description">{props.description}</p>
      </div>
   )
}

export default DescriptionOpen
