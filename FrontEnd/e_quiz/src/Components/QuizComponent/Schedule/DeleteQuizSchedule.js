import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DeleteQuizSchedule()
{
  
  let id=useParams('quizId');
  console.log(id.quizId);
  let navigate =useNavigate('');
  const {quizId}=useParams('quizId');
  console.log("Quiz Id : ",quizId);
  const facultydata =sessionStorage.getItem('faculty');
  const {facultyId}=JSON.parse(facultydata);
  console.log("Faculty Id : ",facultyId);

  const DeleteQuiz=(e)=>
  {
    e.preventDefault();
    console.log("inside Function Quiz Id : ",id.quizId);
    axios.post(`http://localhost:8080/quizschedule/deleteschedule/${id.quizId}`
    ).then((Result)=>
    {
      console.log(Result);
      alert("Question Deleted...");
      navigate(`/FacultyDashboard`);
    }).catch((error)=>
    {
      console.log(error);
    })
  }

      return(
            <>
            <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <div className="shadow-none p-3 xl-5">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3 border border-dark">
            <img src="https://www.datamaran.com/wp-content/uploads/2018/09/Quiz-How-well-do-you-know-the-ESG-regulatory-landscape.jpg"
            className="w-100" alt=""/>
          <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Are you Sure To Delete the Quiz</b></h2>
    
            <form className="px-md-1">
        
            <div className="form-outline mb-4">
            <b>Faculty ID :</b> &emsp;<input type="number"  className="form-control" placeholder={facultyId} />
            </div>
      
            <div className="row">
                    <div className="col-md-6 mb-4">
                    <b>Quiz ID :</b><input type="number"  className="form-control" value={id.quizId} />
                      </div>
                    </div>
         
            <br/><br/>
            <div className="row">
              <div className="col-md-4 mb-4">
              <button type="submit" className="btn btn-success btn-mb mb-1" onClick={DeleteQuiz}>Delete</button>
              </div>
              <div className="col-md-4 mb-4">
              <Link to="/FacultyDashboard" className="btn btn-info btn-mb mb-1">Back</Link>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
      </div>   
      </div>
      </>
      )
}