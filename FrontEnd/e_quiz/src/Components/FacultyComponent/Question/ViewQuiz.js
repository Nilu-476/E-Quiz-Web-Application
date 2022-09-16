import { Link } from "react-router-dom";

export default function ViewQuiz()
{
      return(
             <body className="main ">
            <div className="header">
            <h1>Quiz Details</h1>
            </div>

<div className="navbar">
      <Link to="/FacultyDashboard">Back</Link>
      <Link to="/" >Home</Link>
      <Link to="/Logout">LogOut</Link>
      </div>                   


<table className="table align-items-center container border border-dark  bg-white text-dark fw-bolder">
  <thead className="xl-6 bg-warning text-dark ">
    <tr>
      <th>Quiz ID</th>
      <th>Quiz Topic</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className="align-middle xl-3 border border-dark align-items-center">
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
      <td><div className="ms-3 fw-bolder">
            60 min
      </div>
      </td>
      <td>
      <div >
      <Link to="/AddQuestion" id="" className="btn btn-success btn-sm mb-4 align-center">View Questions</Link>&emsp;
      <Link to="/AddQuestion" id="" className="btn btn-dark btn-sm mb-4 align-center">Add Questions</Link>&emsp;
      <Link to="/UpdateQuestion" id="" className="btn btn-primary btn-sm mb-4 align-center">Update Questions</Link>&emsp;
      <Link to="/DeleteQuestion" id="" className="btn btn-danger btn-sm mb-4 align-center">Delete Question</Link>
      </div>
      </td>
    </tr>
  </tbody>
</table>  
<br/><br/> 
</body>  
      )
}