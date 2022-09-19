
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function FacultyDashboard()
{
      
      const data =sessionStorage.getItem('faculty');
      const {firstName , middleName , lastName ,userName}=JSON.parse(data);
      // ...................................

     const [Quiz ,setQuiz]=useState([]);
     useEffect(()=>
     {
      async function GetAllSchedule()
      {
            let value=await axios.get(`http://localhost:8080/quizschedule/viewschedule/${userName}`);
            setQuiz(value.data);
      }
      GetAllSchedule();
     },[]);

            return(
                  <>
                  <body className="main">

            <div className="header">
                  <h1>Faculty Dashboard</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div>
       
            <div className=" navbar align-items-left ">
                  <Link to="/ViewQuiz">View Quiz</Link>
                  <a href="./Results.html">Results</a>
                  <Link to="/FacultyLogout">LogOut</Link>
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
   {
      Quiz.map((data,i)=>
      {
            console.log(data);

      return(
      <tr key={i}>
      <td>
          <div className="ms-3 fw-bolder">
            {data.teacher.facultyId}
            </div>
      </td>
      <td>
          <div className="ms-3 fw-bolder">
            {data.quizId}
          </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            {data.quizName}
          </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            {data.quizDesc}
      </div> 
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            {data.scheduleDate}
      </div>
      </td>
      <td>
      <div className="ms-3 fw-bolder">
            {data.scheduleTime}
      </div>
      </td>
      <td><div className="ms-3 fw-bolder">
            {data.duration}
      </div>
      </td>
      <td>
      <div >
      <Link to="/UpdateQuizSchedule" className="btn btn-primary btn-sm mb-1" id={data.quizid}>Update</Link>&emsp;
      <Link to="/..." type="submit" className="btn btn-danger btn-sm mb-1">Delete</Link>
      </div>
      </td>
    </tr>
      )})}
  </tbody>
</table>  
<br/><br/>

   
                  </>
            )//return ends here
     
            
}