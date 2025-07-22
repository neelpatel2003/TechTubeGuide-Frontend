import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import api from '../api/axiosConfig';

function SignInForm({ isSignedIn }) {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
         // Adjust endpoint as needed
         await api.post('/user', {
            userName: username,
            email: email,
            password: password
         });
         setSuccess('Signup successful! You can now log in.');
      } catch (err) {
         setError('Signup failed. Please try again.');
      } finally {
         setLoading(false);
      }
   };
   
   return (
      <>
         <div className="box">
            <div className="left">
               <div className="overlay">
                  <h1>TechTubeGuide:</h1>
                  <div id="subTitle">Your Personalized Technical YouTube Course Suggestion App</div>
                  <div id="description">Are you overwhelmed by the vast sea of technical content on YouTube? TechTubeGuide is here to simplify your learning journey. Our application is your ultimate companion for discovering the best technical YouTube courses tailored to your interests and skill level.</div>
                  <span>
                     <p>Login using Social Media Account</p>
                     <a href="/Error"><i className="fa fa-facebook" aria-hidden="true"></i> Login using Facebook</a>
                     <a href="/Error"><i className="fa fa-google" aria-hidden="true"></i> Login using Google</a>
                  </span>
               </div>
            </div>


            <div className="right">
               <h5>SignUp Page</h5>
               <form onSubmit={handleSubmit}>
                  <div className="inputs">
                     <input className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                     <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                     <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                  </div>
                  <div className="forget-password">
                     <p><a href="/Login">Already a user?</a></p>
                  </div>
                  <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'SignUp'}</button>
               </form>
               {error && <div className="text-danger">{error}</div>}
               {success && <div className="text-success">{success}</div>}
            </div>

         </div>
      </>
   )
}

SignInForm.propTypes = {
  isSignedIn: PropTypes.bool
};

export default SignInForm
