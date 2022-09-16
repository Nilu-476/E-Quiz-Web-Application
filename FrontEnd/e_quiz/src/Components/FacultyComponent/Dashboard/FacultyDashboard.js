import { Component } from "react";
import { Link } from "react-router-dom";
import './FacultyDashboard.css';
export default class FacultyDashboard extends Component
{
      
      render()
      {
            return(
                  <>
                  <body className="main">

            <div className="header">
                  <h1>Faculty Dashboard</h1>
            </div>
       
            <div className="navbar">
                  <Link to="/ViewQuiz">View Quiz</Link>
                  <a href="./Results.html">Results</a>
                  <Link to="/" >Home</Link>
                  <Link to="/Logout">LogOut</Link>
                  </div>                   
            </body>
    
            <br/><br/><br/><br/>
            <div className="col-md-4 mb-4">
            <Link to="/AddQuizSchedule" className="btn btn-dark text-light btn-mb mb-1">Add Quiz Schedule</Link>
            </div>
            
      <table className="table align-items-center container border border-dark  bg-white text-dark fw-bolder">
      <thead className="bg-warning text-dark ">
      <tr>
      <th>Faculty ID</th>
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
            2153
          </div>
      </td>
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
      <button type="submit" className="btn btn-success btn-sm mb-1 ">View</button>&emsp;
      <Link to="/UpdateQuizSchedule" className="btn btn-primary btn-sm mb-1">Edit</Link>&emsp;
      <button type="submit" className="btn btn-danger btn-sm mb-1">Delete</button>
      </div>
      </td>
    </tr>
  </tbody>
</table>  
<br/><br/>

   
                  </>
            )
      }
}