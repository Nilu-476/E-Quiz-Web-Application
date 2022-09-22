import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

export default function ExamResult()
{
      
 
      const data =sessionStorage.getItem('student');
      const {prnNo, firstName , middleName , lastName ,username }=JSON.parse(data);
      console.log(username);
      const {quizId}=useParams('quizId');
      console.log("Quiz Id : ",quizId);

      let Status=useParams('');

      //sessionStorage.removeItem()

      const [ResultData,setResultData]=useState([]);

      useEffect(()=>
      {
            async function GetStudentQuiz()
            {
                  let value = await axios.get(`http://localhost:8080/result/getallquizresult/${username}`);
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
      <h1>Exam Performance</h1>
      </div>
      <div className="navbar main" >
            <h3>&emsp;Hello {firstName} {middleName} {lastName} </h3>
            <Link to="/StudentLogout">LogOut</Link>
            </div>                   
      </body>
      <div className="p-3 xl-5">
      <br/><br/><br/><br/>
      <table className="table align-middle mb-0 border border-light bg-transparent text-light">

<thead className="bg-dark text-light align-items-center fw-bolder" style={{fontSize:"22px"}}>
<tr>
<th>PRN Number</th>
<th>Quiz ID</th>
<th>Result ID</th>
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
      {prnNo}
    </div>
</td>
<td>
<div className="ms-3 fw-bolder">
     {quizId}
    </div>
</td>
<td>
<div className="ms-3 fw-bolder">
     {data.resultId}
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