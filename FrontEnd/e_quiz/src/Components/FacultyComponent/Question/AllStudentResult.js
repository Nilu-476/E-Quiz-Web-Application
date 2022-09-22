import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllStudentResult()
{

      const [ResultData,setResultData]=useState([]);

      useEffect(()=>
      {
            async function GetStudentQuiz()
            {
                  let value = await axios.get(`http://localhost:8080/result/GetAllResult`);
                  setResultData(value.data);
                  console.log(value.data)

            }
            GetStudentQuiz();
      },[]);

      return(
            <>
             <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', height:'1500px', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
      <body className="main ">
      <div className="header">
      <h1>Exam Performance of Student</h1>
      </div>    
      <div className="navbar navbar-brand">
            <Link to="/FacultyDashboard">Back to Home</Link>
      </div>             
      </body>
      <div className="p-3 xl-5">
      <br/><br/><br/><br/>
      <table className="table align-middle mb-0 border border-light bg-transparent text-light">

<thead className="bg-dark text-light align-items-center fw-bolder" style={{fontSize:"22px"}}>
<tr>
<th>PRN Number</th>
<th>Student Name</th>
<th>Quiz Name</th>
<th>Quiz Description</th>
<th>Quiz Date</th>
<th>Marks Obtained</th>
<th>Total Questions</th>
</tr>
</thead>
<tbody className="border border-light align-items-center" style={{fontSize:"18px"}}>
{
ResultData.map((data,i)=>
{
      console.log(data);
      return(
            
      <tr key={i}>
      <td>
    <div className="ms-3 fw-bolder">
      {data.student.prnNo}
    </div>
</td>
<td>
      <div className="ms-3 fw-bolder">
      {data.student.firstName} {data.student.middleName} {data.student.lastName}
    </div>
</td>
<td>
<div className="ms-3 fw-bolder">
     {data.quiz.quizName}
    </div>
</td>
<td>
<div className="ms-3 fw-bolder">
     {data.quiz.quizDesc}
</div> 
</td>
<td>
<div className="ms-3 fw-bolder">
      {data.quizGivenDate}
</div>
</td>
<td>
<div className="ms-3 fw-bolder">
      {data.marksObtained}
      
</div>
</td>
<td>
<div className="ms-3 fw-bolder">
      {data.totalMarks}
</div>
</td>

<td>

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