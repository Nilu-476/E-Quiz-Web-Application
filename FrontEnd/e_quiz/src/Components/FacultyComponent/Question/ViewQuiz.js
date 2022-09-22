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
        <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', height:'1000px', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
        <body >
            <div className="main">
            <div className="header">
            <h1>Quiz Details</h1>
            <div className="text-light">
                  <h4> Welcome {firstName} {middleName} {lastName} </h4>
            </div>
            </div> 
            </div>
      <div className="navbar navbar-brand">
      <Link to="/FacultyDashboard">Back</Link>
      <Link to="/" >Home</Link>
      <Link to="/Logout">LogOut</Link>
      </div>                   

<div className="about p-3 col-xl-12">
<br/><br/> 
<br/><br/> 

<table className="table align-middle mb-0 border border-light bg-transparent text-light fw-bolder">
  <thead className="bg-secondary text-light" style={{fontSize:"20px"}}>
    <tr>
      <th>Quiz ID</th>
      <th>Quiz Topic</th>
      <th>Duration</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className="border border-light align-items-center" style={{fontSize:"18px"}}>
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
               <button className="btn btn-success btn-sm sm-4 align-center ">View All Questions</button>  
        </NavLink>&emsp;
        <NavLink exact to={`/AddQuestion/${data.quizId}`}>
               <button className="btn btn-info btn-sm sm-4 text-dark fw-bold">Add Question</button>  
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
</div>
      )
}