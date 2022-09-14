import { Component } from "react";
import { Link } from "react-router-dom";
import './StudentDashboard.css';
export default class StudentDashboard extends Component
{
      render()
      {     

            return(
                  <>
            <body className="main">
            <div className="header">
            <h1>Student Dashboard</h1>
            </div>
            <div className="navbar">
                  <a href="./CreatePaper.html">Attempt Quiz</a>
                  <a href="./Updatepaper.html">View Results</a>
                  <a href="./DeletePaper.html">Give Feedback</a>
                  <a href="./Results.html">Performance Statastics</a>
                  <Link to="/">Home</Link>
                  <Link to="/Logout">LogOut</Link>
                  </div>    
                 </body>
                  </>
            )
      }
}