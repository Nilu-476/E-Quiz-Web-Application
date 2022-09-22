import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
                        let value = await axios.get('http://localhost:8080/quizschedule/getschedule');
                        setStudentdata(value.data);
                  }
                  GetStudentQuiz();
            },[]);
            
            return(
            <>
        <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', height:'1000px', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <body className="main ">
            <div className="header">
            <h1>Student Dashboard</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div>
            <div className="navbar navbar-brand">
                  <NavLink exact to={`/ExamResult/7`}>
                                    View Results 
                  </NavLink>
                  <Link to="/Feedback">Give Feedback</Link>
                  <a href="./Results.html">Performance Statastics</a>
                  <Link to="/StudentProfileEdit">Edit Profile</Link>
                  <Link to="/StudentLogout">LogOut</Link>
                  </div>                   
            </body>
            <div className="p-3 xl-5">
            <br/><br/><br/><br/>
            <table className="table align-middle mb-0 border border-light bg-transparent text-light">

  <thead className="bg-dark text-light align-items-center fw-bolder" style={{fontSize:"20px"}}>
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
  <tbody className="border border-light align-items-center" style={{fontSize:"18px"}}>
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
      <NavLink exact to={`/StartExam/${data.quizId}`}>
            <button className="btn btn-primary btn-sm mb-1">Start Exam</button>
      </NavLink>
      </div>
      </td>
    </tr>
            )
      })
    }
  </tbody>
</table>  
<br/><br/>  
</div>
</div>

      </>
            )
      }