import React, { useEffect, useState } from 'react';
import '../Design/Courses.css';
import api from '../api/axiosConfig';
import CourseCard from './CourseCard';

function Courses() {
   const [courses, setCourses] = useState();

   useEffect(() => {
      async function fetchData() {
         try {
            return await api.get("/courses").then((response) => setCourses(response.data));
         }
         catch (err) {
            console.log(err);
         }
      }
      fetchData();
   }, []);
   console.log(courses);
   return (
      <div className="container text-center space-between">
         <div className="row row-cols-3">
            {courses!=null?(courses.map((course) =>{
               return <CourseCard key={courses.courseId} title={course.channelName} language={course.courseLanguages} description={course.contentAvailable} videourl={course.videoURL}/>
            })):(<CourseCard/>)}
         </div>
      </div>
   )
}

export default Courses
