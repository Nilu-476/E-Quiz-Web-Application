import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function ViewQuiz()
{
  const data =sessionStorage.getItem('faculty');
  const {firstName , middleName , lastName ,userName }=JSON.parse(data);

      // ...................................

     const [ViewQuiz ,setViewQuiz] = useState([]);
     useEffect(()=>
     {
       async function GetViewQuiz()
       {
         let value=await axios.get(`http://localhost:8080/quizschedule/viewschedule/${userName}`);
         setViewQuiz(value.data);
       }
       GetViewQuiz();
     },[]);

      return(
             <body >
            <div className="header main">
            <h1>Quiz Details</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div>
      <div className="navbar">
      <Link to="/FacultyDashboard">Back</Link>
      <Link to="/" >Home</Link>
      <Link to="/Logout">LogOut</Link>
      </div>                   

<div className="about p-3 xl-5">
<br/><br/> 
<br/><br/> 

<table className="table align-items-center border border-light  bg-transparent text-light fw-bolder">
  <thead className="xl-6 bg-secondary text-light" style={{fontSize:"20px"}}>
    <tr>
      <th>Quiz ID</th>
      <th>Quiz Topic</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className="align-middle xl-3 border border-light align-items-center" style={{fontSize:"18px"}}>
   {
    ViewQuiz.map((data,i)=>
    {
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
        <td><div className="ms-3 fw-bolder">
             {data.quizDesc}
        </div>
        </td>
        <td>
        <div >
        <NavLink exact to={`/ViewAllQuestion/${data.quizId}`}>
               <button className="btn btn-success btn-sm sm-4 align-center ">View Questions</button>  
        </NavLink>&emsp;
        <NavLink exact to={`/AddQuestion/${data.quizId}`}>
               <button className="btn btn-info btn-sm sm-4 ">Add Question</button>  
        </NavLink>&emsp;
        <NavLink exact to={`/UpdateQuestion/${data.quizId}`}>
               <button className="btn btn-primary btn-sm sm-4">Update Questions</button>  
        </NavLink>&emsp;
        <NavLink exact to={`/AddQuestion/${data.quizId}`}>
               <button className="btn btn-danger btn-sm sm-4 ">Delete Questions</button>  
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
</body>  
      )
}