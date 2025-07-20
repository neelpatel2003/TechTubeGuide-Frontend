import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import NavBar from './components/NavBar';
import Review from './components/Review';

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      background: {
         default: '#181a20',
         paper: '#23263a',
      },
      text: {
         primary: '#fff',
         secondary: '#cbd5e1',
         disabled: '#94a3b8',
      },
      primary: {
         main: '#6366f1',
         contrastText: '#fff',
      },
      secondary: {
         main: '#06b6d4',
         contrastText: '#fff',
      },
      success: {
         main: '#22c55e',
      },
      error: {
         main: '#ef4444',
      },
      warning: {
         main: '#f59e42',
      },
      info: {
         main: '#3b82f6',
      },
   },
   typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
   },
   components: {
      MuiInputBase: {
         styleOverrides: {
            input: {
               color: '#fff',
               '::placeholder': {
                  color: '#cbd5e1',
                  opacity: 1,
               },
            },
         },
      },
      MuiOutlinedInput: {
         styleOverrides: {
            notchedOutline: {
               borderColor: '#06b6d4',
            },
         },
      },
      MuiFormLabel: {
         styleOverrides: {
            root: {
               color: '#cbd5e1',
               '&.Mui-focused': {
                  color: '#6366f1',
               },
            },
         },
      },
   },
});

function normalizeCourse(course) {
   return {
      channelName: course.channelName ?? 'Unknown',
      contentAvailable: Array.isArray(course.contentAvailable)
         ? course.contentAvailable.join(', ')
         : (course.contentAvailable ?? 'No description available.'),
      courseID: course.courseID ?? 'N/A',
      courseLanguages: course.courseLanguages ?? ['N/A'],
      courseName: course.courseName ?? 'No title',
      courseURL: course.courseURL,
      lengthy: course.lengthy ?? false,
      oneShot: course.oneShot ?? false,
      playlist: course.playlist ?? false,
      rating: course.rating ?? 'N/A',
      reviews: course.reviews ?? [],
   };
}

function App() {
   const [courses, setCourses] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState(null);
   const [review, setReviews] = useState([]);
   const [reviewRefresh, setReviewRefresh] = useState(false);
   const [search, setSearch] = useState('');

   useEffect(() => {
      async function fetchCourses() {
         try {
            const res = await api.get('/courses');
            console.log(res.data)
            setCourses(res.data);
            if (res.data.length > 0 && !selectedCourse) {
               setSelectedCourse(res.data[0]);
            }
         } catch (err) {
            setCourses([]);
         }
      }
      fetchCourses();
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      async function fetchReviews() {
         if (!selectedCourse) return;
         try {
            if (selectedCourse.reviews && selectedCourse.reviews.length > 0) {
               setReviews(selectedCourse.reviews);
            } else {
               setReviews([]);
            }
         } catch (err) {
            setReviews([]);
         }
      }
      fetchReviews();
   }, [selectedCourse, reviewRefresh, setReviews]);

   const handleAddReview = async (name, description) => {
      if (!selectedCourse) return;
      try {
         await api.post('/review', {
            Description: description,
            userName: name,
            courseName: selectedCourse.channelName
         });
         setReviewRefresh(r => !r);
      } catch (err) {
         alert('Error submitting review.');
      }
   };

   // Filter courses by search
   const filteredCourses = courses.filter(course =>
      course.channelName.toLowerCase().includes(search.toLowerCase())
   );

   const normalizedCourses = filteredCourses.map(normalizeCourse);
   const normalizedSelectedCourse = selectedCourse ? normalizeCourse(selectedCourse) : null;
   // Pagination state and variables (must be after normalizedCourses)
   const [sidebarPage, setSidebarPage] = useState(0);
   const coursesPerPage = 5;
   const totalPages = Math.ceil(normalizedCourses.length / coursesPerPage);
   const paginatedCourses = normalizedCourses.slice(sidebarPage * coursesPerPage, (sidebarPage + 1) * coursesPerPage);

   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <Box minHeight="100vh" bgcolor="background.default">
            <NavBar />
            <Box sx={{ p: { xs: 1, md: 4 }, maxWidth: 1600, mx: 'auto' }}>
               <Grid container columns={{ xs: 12, md: 12 }} spacing={4} sx={{ width: '100%', margin: 0, flexWrap: 'nowrap' }}>
                  {/* Sidebar: Course List */}
                  <Grid gridColumn={{ xs: 'span 12', md: 'span 3' }} sx={{ minWidth: 280, maxWidth: 350, flex: '0 0 320px' }}>
                     <Card sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 3, p: 2, position: 'sticky', top: 90 }}>
                        <Typography variant="h5" fontWeight={700} color="primary" mb={2}>
                           Courses
                        </Typography>
                        <TextField
                           fullWidth
                           variant="outlined"
                           placeholder="Search courses..."
                           value={search}
                           onChange={e => {
                              setSearch(e.target.value);
                              setSidebarPage(0); // Reset to first page on search
                           }}
                           sx={{ mb: 2 }}
                        />
                        <Box>
                           {paginatedCourses.map((course, idx) => (
                              <Card
                                 key={course.courseID || idx}
                                 sx={{
                                    mb: 2,
                                    p: 2,
                                    bgcolor: normalizedSelectedCourse && normalizedSelectedCourse.courseID === course.courseID ? 'primary.main' : 'background.paper',
                                    color: normalizedSelectedCourse && normalizedSelectedCourse.courseID === course.courseID ? 'primary.contrastText' : 'text.primary',
                                    cursor: 'pointer',
                                    border: normalizedSelectedCourse && normalizedSelectedCourse.courseID === course.courseID ? '2px solid #06b6d4' : '1px solid #23263a',
                                    boxShadow: normalizedSelectedCourse && normalizedSelectedCourse.courseID === course.courseID ? 6 : 1,
                                    borderRadius: 2,
                                    transition: 'all 0.2s',
                                 }}
                                 onClick={() => setSelectedCourse(courses[sidebarPage * coursesPerPage + idx])}
                              >
                                 <Typography fontWeight={600}>{course.channelName}</Typography>
                                 <Typography variant="body2" color="text.secondary">
                                    {course.courseLanguages && course.courseLanguages.join(', ')}
                                 </Typography>
                              </Card>
                           ))}
                        </Box>
                        {/* Pagination Controls */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                           <Button
                              variant="outlined"
                              size="small"
                              disabled={sidebarPage === 0}
                              onClick={() => setSidebarPage(p => Math.max(0, p - 1))}
                           >
                              Previous
                           </Button>
                           <Typography variant="caption" color="text.secondary">
                              Page {sidebarPage + 1} of {totalPages}
                           </Typography>
                           <Button
                              variant="outlined"
                              size="small"
                              disabled={sidebarPage >= totalPages - 1}
                              onClick={() => setSidebarPage(p => Math.min(totalPages - 1, p + 1))}
                           >
                              Next
                           </Button>
                        </Box>
                     </Card>
                  </Grid>
                  {/* Details Pane: Course Details, Reviews, Add Review */}
                  <Grid gridColumn={{ xs: 'span 12', md: 'span 9' }} sx={{ flex: 1, minWidth: 0 }}>
                     {normalizedSelectedCourse ? (
                        <>
                           <Card sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 3, mb: 4, p: { xs: 2, md: 4 } }}>
                              <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'flex-start', gap: 4 }}>
                                 {/* Video Player */}
                                 <Box sx={{ flex: '1 1 350px', minWidth: 0 }}>
                                    <div style={{
                                       position: 'relative',
                                       width: '100%',
                                       paddingTop: '56.25%', // 16:9 aspect ratio
                                       borderRadius: '16px',
                                       overflow: 'hidden',
                                       boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                                       background: '#181a20',
                                       marginBottom: '1.5rem'
                                    }}>
                                       <iframe
                                          title="YouTube Video"
                                          src={selectedCourse.courseURL}
                                          webkitallowfullscreen
                                          mozallowfullscreen
                                          allowfullscreen
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             width: '100%',
                                             height: '100%',
                                             border: 0
                                          }}
                                       ></iframe>
                                    </div>
                                 </Box>
                                 {/* Course Details */}
                                 <Box sx={{ flex: '2 1 500px', minWidth: 0, p: { xs: 0, md: 2 } }}>
                                    <Typography variant="h3" fontWeight={800} color="primary" mb={2} sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                       {normalizedSelectedCourse.courseName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" mb={1} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                                       <b>Channel:</b> {normalizedSelectedCourse.channelName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                       <Chip label={`ID: ${normalizedSelectedCourse.courseID}`} color="secondary" size="small" />
                                       <Chip label={`Rating: ${normalizedSelectedCourse.rating}`} color="warning" size="small" />
                                    </Box>
                                    <Typography variant="body1" color="#bfc7d5" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                       <b>Description:</b> {normalizedSelectedCourse.contentAvailable}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                                       <Chip label={normalizedSelectedCourse.playlist ? 'Playlist' : 'Single Video'} color="primary" size="small" />
                                       <Chip label={normalizedSelectedCourse.lengthy ? 'Lengthy' : 'Short'} color="secondary" size="small" />
                                       <Chip label={normalizedSelectedCourse.oneShot ? 'One Shot' : 'Series'} color="success" size="small" />
                                       <Chip label={normalizedSelectedCourse.courseLanguages && normalizedSelectedCourse.courseLanguages.join(', ')} color="info" size="small" />
                                    </Box>
                                 </Box>
                              </Box>
                           </Card>
                           <Card sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 3, mb: 4 }}>
                              <CardContent>
                                 <Typography variant="h5" fontWeight={700} color="primary" mb={2}>
                                    Reviews
                                 </Typography>
                                 {normalizedSelectedCourse.reviews.length > 0 ? (
                                    <Grid container spacing={2}>
                                       {normalizedSelectedCourse.reviews.map((review, idx) => (
                                          <Grid item xs={12} sm={6} key={review.id || idx}>
                                             <Review user={review.user} description={review.description} />
                                          </Grid>
                                       ))}
                                    </Grid>
                                 ) : (
                                    <Typography sx={{ color: '#fff', fontWeight: 500 }}>No reviews yet for this course.</Typography>
                                 )}
                              </CardContent>
                           </Card>
                           <AddReviewInline onAdd={handleAddReview} />
                        </>
                     ) : (
                        <Card sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 3, p: 4 }}>
                           <Typography color="info.main">Select a course to see details.</Typography>
                        </Card>
                     )}
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </ThemeProvider>
   );
}

function AddReviewInline({ onAdd }) {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !description) {
         setMessage('Please fill in all fields.');
         return;
      }
      await onAdd(name, description);
      setMessage('Review submitted!');
      setName('');
      setDescription('');
      setTimeout(() => setMessage(''), 2000);
   };

   return (
      <Card sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 3, mb: 4 }}>
         <CardContent>
            <Typography variant="h6" fontWeight={700} color="primary" mb={2}>
               Add a Review
            </Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} alignItems="flex-end">
               <TextField
                  fullWidth
                  label="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  InputProps={{ sx: { color: '#fff' } }}
                  InputLabelProps={{ sx: { color: '#cbd5e1' } }}
                  placeholder="Your Name"
                  sx={{ '& .MuiInputBase-input::placeholder': { color: '#fff', opacity: 1 } }}
               />
               <TextField
                  fullWidth
                  label="Your Review"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                  InputProps={{ sx: { color: '#fff' } }}
                  InputLabelProps={{ sx: { color: '#cbd5e1' } }}
                  placeholder="Your Review"
                  sx={{ '& .MuiInputBase-input::placeholder': { color: '#fff', opacity: 1 } }}
               />
               <Button type="submit" variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, minWidth: 120 }}>
                  Submit
               </Button>
            </Box>
            {message && <Typography color="success.main" mt={2}>{message}</Typography>}
         </CardContent>
      </Card>
   );
}

export default App;
