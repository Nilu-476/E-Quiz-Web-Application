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
                  <Link to="/StartExam" >Start Exam</Link>
                  <a href="./CreatePaper.html">Attempt Quiz</a>
                  <a href="./Updatepaper.html">View Results</a>
                  <a href="./DeletePaper.html">Give Feedback</a>
                  <a href="./Results.html">Performance Statastics</a>
                  <Link to="/">Home</Link>
                  <Link to="/Logout">LogOut</Link>
                  </div>                   
            </body>
            <br/><br/><br/><br/>
            <table className="table align-middle mb-0 border border-dark  bg-white text-dark">

  <thead className="bg-warning text-dark align-items-center fw-bolder">
    <tr>
      <th>Quiz ID</th>
      <th>Quiz Topic</th>
      <th>Quiz Description</th>
      <th>Schedule Date</th>
      <th>Schedule Time</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className="border border-dark align-items-center">
    <tr>
      <td>
          <div className="ms-3 fw-bolder">
            ADVJ
          </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            Advanced Java
          </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            Spring Boot Rest Api
      </div> 
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            14/09/2022
      </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            4.00 PM
      </div>
      </td>
      <td><div className="ms-3 fw-bolder">
            60 min
      </div>
      </td>
      <td>
      <div >
      <Link to="/StartExam" className="btn btn-primary btn-sm mb-1">Start Quiz</Link>&emsp;
      </div>
      </td>
    </tr>
  </tbody>
</table>  
<br/><br/>
<div className="col-md-4 mb-4">
<Link to="/AddQuizSchedule" className="btn btn-dark text-light btn-mb mb-1">Add Quiz Schedule</Link>
</div>   
      </>
            )
      }
}