import React from 'react';
import '../Design/Courses.css';
import DescriptionOpen from './DescriptionOpen';
import PropTypes from 'prop-types';
function CourseCard(props) {
   return (
      <div className="container d-flex justify-content-center align-item-center">
         <div className="description"><DescriptionOpen description={props.description}/></div>
         <div className="course-card">
            <iframe title="YouTube Video" src={props.videourl} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <h2 className="course-title">{props.title}</h2>
            <p className="course-description">Language: {props.language}</p>
            <a href="/courses" className="course-button"><i className="ri-heart-add-fill visible"></i> Add</a>
         </div>
      </div>
   )
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  videourl: PropTypes.string
};

export default CourseCard
