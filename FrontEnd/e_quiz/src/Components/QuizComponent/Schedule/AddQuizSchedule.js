import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddQuizSchedule()
{
    const teacher =sessionStorage.getItem('faculty');
    let navigate=useNavigate('');
  //   {
  //     "quizid":14,
  //     "teacher":{
  //         "firstName": "Bhartesh",
  //         "middleName": "Rajkumar",
  //         "lastName": "Girmal",
  //         "email": "bharteshgirmal@gmail.com",
  //         "mobileNo": 9503042573,
  //         "gender": "male",
  //         "dateOfBirth": "2022-09-11",
  //         "userName": "Bhartesh123",
  //         "password": "Bhartesh123",
  //         "facultyId": 6
  //     },
  //     "quizName":"JAVA",
  //     "quizDesc":"Java",
  //     "scheduleDate":"18/08/2022",
  //    "scheduleTime":"10.00",
  //     "duration":"60"  
  // }

   const [Schedule , setSchedule] = useState({
    teacher:JSON.parse(teacher),
    quizName:'',
    quizDesc:'',
    scheduleDate:'',
    scheduleTime:'',
    duration:''
 });
 sessionStorage.setItem('quizschedule' , JSON.stringify(Schedule));

function handleInput(e){
    const name = e.target.name;
    const value = e.target.value;
    setSchedule({ ...Schedule, [name]: value });
     // console.log(exam);
 }

 const Registration= (e) =>
 {
    console.log(Schedule);
    e.preventDefault();
    console.log("Inside Function ...");
     axios.post(`http://localhost:8080/quizschedule/addquizschedule` , 
     Schedule
     ).then((e)=>{
      console.log(e);
      navigate("/FacultyDashboard");
     }).catch((error)=>{
      console.log(error);
     });
 }

      return(
            < div className="shadow-none p-4 xl-5 bg-info bg-gradient">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
         <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://www.datamaran.com/wp-content/uploads/2018/09/Quiz-How-well-do-you-know-the-ESG-regulatory-landscape.jpg"
            className="w-100" alt="" />
          <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Add Quiz Schedule</b></h2>

            <form className="px-md-1">
            
            {/* <div className="form-outline mb-4">
                <input type="number" name="quizid" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Faculty ID :</b></label>
              </div> */}

              <div className="form-outline mb-4">
                <input type="number" name="quizid" className="form-control"onChange={(e) => handleInput(e) }/>
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
                <input type="date" name="scheduleDate" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Schedule Date :</b></label>
              </div>

              <div className="col-md-6 mb-4">
                <input type="time" name="scheduleTime" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Schedule Time :</b></label>
              </div>
              </div>

              <div className="form-outline mb-4">
                <input type="number" name="duration" className="form-control" onChange={(e) => handleInput(e)}/>
                <label className="form-label"><b>Duration :</b></label>
              </div>

              <div className="row">
                  <div className="col-md-4 mb-4"> 
                  <button type="submit" className="btn btn-success btn-mb mb-1" onClick={Registration}>Schedule</button>
                  </div>
                  <div className="col-md-4 mb-4"> 
                  <button type="submit" className="btn btn-danger btn-mb mb-1">Reset</button>
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
      )
}