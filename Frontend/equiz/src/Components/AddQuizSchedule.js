import { Link } from "react-router-dom";
import React,{useState} from "react";
import Header from "./Header";
import axios from "axios";


export default function AddQuizSchedule() {

  const uname = sessionStorage.getItem("authenticatedUser")

  const [schedule, setSchedule] = useState({ name:'', desc:'',date:'',time:'',duration:''});

  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setSchedule({ ...schedule, [name]: value, });
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/quizscheule/addquizschedule/"+uname,{
      quizName:schedule.name,
      quizDesc:schedule.desc,
      scheduleDate:schedule.date,
      scheduleTime:schedule.time,
      duration:schedule.duration,
      
    }).then((response)=>{
      alert(response.data);
    }).catch((e)=>{
      console.log(e);
    })
  }


  return (
    <>
    <Header></Header>
    < div className="border border-dark" >
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6" >
              <div className="card rounded-3" style={{ backgroundColor: "peachpuff" }}>
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Add Quiz Schedule</b></h2>

                  <form className="px-md-1">

                    <div className="form-outline mb-4">
                      <label className="form-label"><b>Quiz Topic :</b></label>
                      <input type="text" className="form-control" style={{ backgroundColor: "white" }} name='name' onChange={handleChange}/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label"><b>Quiz Description :</b></label>
                      <textarea type="text" className="form-control" style={{ backgroundColor: "white" }} name='desc' onChange={handleChange}/>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label"><b>Schedule Date :</b></label>
                        <input type="date" className="form-control" style={{ backgroundColor: "white" }} name='date' onChange={handleChange}/>
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="form-label"><b>Schedule Time :</b></label>
                        <input type="time" className="form-control" style={{ backgroundColor: "white" }} name='time' onChange={handleChange}/>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label"><b>Duration :</b></label>
                      <input type="number" className="form-control" style={{ backgroundColor: "white" }} name='duration' onChange={handleChange}/>
                    </div>

                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <button type="submit" className="btn btn-success btn-lg mb-1" onClick={handleSubmit}>Schedule</button>
                      </div>
                      <div className="col-md-4 mb-4">
                        <input type="reset" className="btn btn-danger btn-lg mb-1" value="Reset"/>
                      </div>
                      <div className="col-md-4 mb-4">
                        <Link to="/faculty-dash" className="btn btn-info btn-lg mb-1">Done</Link>
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
    </>
  )
}