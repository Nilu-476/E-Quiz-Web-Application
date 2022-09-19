import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './StudentDashboard.css';
export default function StudentDashboard()
{
 
            const data =sessionStorage.getItem('student');
            const {firstName , middleName , lastName }=JSON.parse(data);

            //sessionStorage.removeItem()

            const [StudentData,setStudentdata]=useState([]);

            useEffect(()=>
            {
                  async function GetStudentQuiz()
                  {
                        let value = await axios.get('http://localhost:8080/quizschedule/getschedulebyid');
                        setStudentdata(value.data);
                  }
                  GetStudentQuiz();
            },[]);
            
            return(
            <>
            <body className="main">
            <div className="header">
            <h1>Student Dashboard</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div>
            <div className="navbar">
                  <a href="./Updatepaper.html">View Results</a>
                  <Link to="/Feedback">Give Feedback</Link>
                  <a href="./Results.html">Performance Statastics</a>
                  <Link to="/StudentProfileEdit">Edit Profile</Link>
                  <Link to="/StudentLogout">LogOut</Link>
                  </div>                   
            </body>
            <br/><br/><br/><br/>
            <table className="table align-middle mb-0 border border-dark  bg-white text-dark">

  <thead className="bg-warning text-dark align-items-center fw-bolder ">
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
    {
      StudentData.map((data,i)=>
      {
            console.log(data);
            return(
                  
            <tr key={i}>
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
      <Link to="/StartExam" className="btn btn-primary btn-sm mb-1">Start Quiz</Link>&emsp;
      </div>
      </td>
    </tr>
            )
      })
    }
  </tbody>
</table>  
<br/><br/>  
      </>
            )
      }