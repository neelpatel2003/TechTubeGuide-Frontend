import React, { useEffect, useState } from 'react';
import '../Design/Courses.css';
import api from '../api/axiosConfig';
import CourseCard from './CourseCard';

function Courses() {
   const [courses, setCourses] = useState();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchData() {
         try {
            await api.get("/courses").then((response) => setCourses(response.data));
         }
         catch (err) {
            setError('Failed to load courses.');
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, []);
   console.log(courses);
   if (loading) {
      return <div className="container text-center"><div>Loading courses...</div></div>;
   }
   if (error) {
      return <div className="container text-center text-danger">{error}</div>;
   }
   return (
      <div className="container text-center space-between">
         <div className="row row-cols-3">
            {courses!=null?(courses.map((course) =>{
               return <CourseCard key={course.courseId} title={course.channelName} language={course.courseLanguages} description={course.contentAvailable} videourl={course.videoURL}/>
            })):(<CourseCard/>)}
         </div>
      </div>
   )
}

export default Courses
