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
        <NavLink exact to={`/AddQuestion/${data.quizId}`}>
               <button>Add Questions</button>  
        </NavLink> 
        <Link to={`/ViewQuestion/${data.quizId}`} id="" className="btn btn-success btn-sm mb-4 align-center">View Questions</Link>&emsp;
        <Link to={`/AddQuestion/${data.quizId}`} id="" className="btn btn-dark btn-sm mb-4 align-center">Questions</Link>&emsp;
        <Link to={`/UpdateQuestion/${data.quizId}`} id="" className="btn btn-primary btn-sm mb-4 align-center">Update Questions</Link>&emsp;
        <Link to={`/DeleteQuestion/${data.quizId}`} id="" className="btn btn-danger btn-sm mb-4 align-center">Delete Question</Link>
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