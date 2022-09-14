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
                  <Link to="/AddQuestion">Add Question</Link>
                  <Link to="/UpdateQuestion">Update Question</Link>
                  <Link to="/DeleteQuestion">Delete Question</Link>
                  <a href="./Results.html">Results</a>
                  <div className="dropdown">
                        <button className="dropbtn">Shedule a Quiz
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                              <Link to="/AddQuizSchedule">Add Quiz Schedule</Link>
                          <a href="./sss">Show Quiz Schedule</a>
                          <a href="./sss">Update Quiz Schedule</a>
                          <a href="./sss">Delete Quiz Schedule</a>
                        </div>
                  </div>
                  <div className="navbar">
                  <Link to="/" >Home</Link>
                  <Link to="/Logout">LogOut</Link>
                  </div>
                  </div>                   
            </body>
            <br/><br/><br/><br/>
            <table className="table align-middle mb-0 bg-white text=-dark">

  <thead className="bg-dark text-light align-items-center">
    <tr>
      <th>Faculty ID</th>
      <th>Quiz Topic</th>
      <th>Quiz Description</th>
      <th>Schedule Date</th>
      <th>Schedule Time</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
      </td>
      <td>Senior</td>
      
      <td>
                  Date
            </td>
            <td>
                  Time
            </td>
      <td>
      <div >
      <button type="submit" className="btn btn-success btn-sm mb-1">View</button>&emsp;
      <button type="submit" className="btn btn-primary btn-sm mb-1">Edit</button>&emsp;
      <button type="submit" className="btn btn-danger btn-sm mb-1">Delete</button>
      </div>
      </td>
    </tr>
  </tbody>
</table>     
                  </>
            )
      }
}