import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateQuizSchedule()
{
    const teacher =sessionStorage.getItem('faculty');
    let navigate=useNavigate('');
    const {quizId}=useParams('quizId');
    console.log("Quiz Id : ",quizId);

    // const {UpdateData} = sessionStorage.getItem('schedule');
    // const {quizName,quizDesc,scheduleDate,scheduleTime,duration}=JSON.parse(UpdateData);
    
   const [Schedule , setSchedule] = useState({
    quizName:'',
    quizDesc:'',
    scheduleDate:'',
    scheduleTime:'',
    duration:''
 });

function handleInput(e){
    const name = e.target.name;
    const value = e.target.value;
    setSchedule({ ...Schedule, [name]: value });
 }

 const UpdateSchedule= (e) =>
 {
    console.log(Schedule);
    e.preventDefault();
    console.log("Inside Function ...");
     axios.post(`http://localhost:8080/quizschedule/editquizschedule/${quizId}` ,
     Schedule
     ).then((e)=>{
      console.log(e);
      navigate("/FacultyDashboard");
     }).catch((error)=>{
      console.log(error);
     });
 }

      return(
        <div style={{backgroundImage:'url("https://c1.wallpaperflare.com/preview/857/593/164/business-paper-office-aerial.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
        <div className="shadow-none p-4 xl-5 ">
        <section className="h-100 h-custom">
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
        <div className="card rounded-4 border border-darker">
          <img src="https://www.datamaran.com/wp-content/uploads/2018/09/Quiz-How-well-do-you-know-the-ESG-regulatory-landscape.jpg"
            className="w-100" alt="" />
          <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Update Quiz Schedule</b></h2>

            <form className="px-md-1">
            
            {/* <div className="form-outline mb-4">
                <input type="number" name="quizid" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Faculty ID :</b></label>
              </div> */}

              <div className="form-outline mb-4">
                <input type="number" name="quizid" className="form-control" value={quizId}/>
                <label className="form-label"><b>Quiz ID :</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="quizName" className="form-control"onChange={(e) => handleInput(e)} />
                <label className="form-label"><b>Quiz Topic :</b></label>
              </div>

              <div className="form-outline mb-4">
                  <textarea type="text" name="quizDesc" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Quiz Description :</b></label>
              </div>
              
              <div className="row">
              <div className="col-md-6 mb-4">
                <input type="date" name="scheduleDate"  className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Schedule Date :</b></label>
              </div>

              <div className="col-md-6 mb-4">
                <input type="time" name="scheduleTime" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Schedule Time :</b></label>
              </div>
              </div>

              <div className="form-outline mb-4">
                <input type="number" name="duration"  className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Duration :</b></label>
              </div>

              <div className="row">
                  <div className="col-md-4 mb-4"> 
                  <button type="submit" className="btn btn-success btn-mb mb-1" onClick={UpdateSchedule}>Schedule</button>
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
      )
}