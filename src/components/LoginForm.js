import React from 'react'

export default function LoginForm() {
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
               <h5>Login Page</h5>
               <p>Don't have an account? <a href="/SignUp">Create Your Account</a> . It takes less than a minute</p>
               <div className="inputs">
                  <input className="input" type="text" placeholder="Username" />
                  <input className="input" type="password" placeholder="Password" />
               </div>
               <div className="forget-password">
                  <p><a href="/Error">Forget password?</a></p>
               </div>
               <button>Login</button>
            </div>

         </div>
      </>
   )
}

