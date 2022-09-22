
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
export default function FacultyDashboard()
{
      
      const data =sessionStorage.getItem('faculty');
      const {firstName , middleName , lastName ,userName}=JSON.parse(data);
      // ...................................

      let id=useParams('quizId');
      console.log(id.quizId);
      let navigate =useNavigate('');
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
        <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', height:'1000px', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <body className="main">
            <div className="header">
                  <h1>Faculty Dashboard</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div>
            <div className=" navbar navbar-brand ">
                  <Link to="/ViewQuiz">View Quiz</Link>
                  <Link to="/AllStudentResult">Results</Link>
                  <Link to="/FacultyLogout">LogOut</Link>
                  <Link to="/FacultyProfileEdit">Edit Profile</Link>
                  </div>                   
            </body>
            <div className=" p-3 col-xl-12">
            <br/><br/><br/><br/>
            <div className="col-md-4 mb-4">
            <Link to="/AddQuizSchedule" className="btn btn-secondary text-light btn-mb mb-1">Add Quiz Schedule</Link>
            </div>     
      <table className="table align-middle mb-0 border border-light bg-transparent text-light">
      <thead className="bg-dark text-light" style={{fontSize:"20px"}}>
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
  <tbody className="border border-light align-items-center" style={{fontSize:"18px"}}>
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
      <NavLink exact to={`/UpdateQuizSchedule/${data.quizId}`}>
               <button className="btn btn-primary btn-sm mb-1">Update Schedule</button>  
      </NavLink>&emsp;
      <NavLink exact to={`/DeleteQuizSchedule/${data.quizId}`}>
               <button className="btn btn-danger btn-sm mb-1">Delete</button>  
      </NavLink>
      </div>
      </td>
    </tr>
      )})}
  </tbody>
</table>  
<br/><br/>
</div>
</div>
</>
            )//return ends here
     
            
}