import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateQuestion()
{
  const  data = useParams('data');
  console.log(data);
  console.log("Question ID : ",data.questionId);
  let id = data.questionId;
  console.log(id);
  const {quizId}=useParams('quizId');
  console.log("Quiz Id : ",quizId);

  const facultydata =sessionStorage.getItem('faculty');
  let navigate=useNavigate('');

  const {facultyId}=JSON.parse(facultydata);
  console.log("Faculty Id : ",facultyId);

  const [question,setQuestion]=useState({
   questionText:"",
   option1:"",
   option2:"",
   option3:"",
   option4:"",
   quizschedule:{quizId},
   correctAnswer:"",
   marks:"",
   facultyentity:{facultydata}
  });

  function handleInput(e){
   const name = e.target.name;
   const value = e.target.value;
   setQuestion({ ...question, [name]: value });
  console.log(question);
}
  
const UpdateQuestion= (e) =>
{
   console.log(question);
   e.preventDefault();
   console.log("Inside Function ...");
    axios.post(`http://localhost:8080/managequestion/editquestion/${id}` ,
    question
    ).then((e)=>{
     console.log(e);
     console.log(question);
   alert("Question Updated Successfully");
   navigate(`/ViewAllQuestion/${quizId}`);
     sessionStorage.setItem('question',JSON.stringify(question));
    }).catch((error)=>{
     console.log(error);
    });
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
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Update a Question</b></h2>
    
            <form className="px-md-1">
        
            <div className="form-outline mb-4">
            <b>Faculty ID :</b> &emsp;<input type="number" defaultValue={facultyId} className="form-control" />
            </div>
            <div className="form-outline mb-4">
            </div>
            <div className="row">
            <div className="col-md-6 mb-4">
            <b>Question ID :</b><input type="number"  className="form-control" value={data.questionId} />
            </div>
            </div>
            <div className="form-outline mb-4">
            <b>Question :</b> &emsp;<textarea type="text" name="questionText"   className="form-control" onChange={(e) => handleInput(e) } />
            </div>
            <div className="form-outline mb-4">
            <b>Option1 :</b> &emsp;<textarea type="text" name="option1" className="form-control" onChange={(e) => handleInput(e) } />
            </div>
            <div className="form-outline mb-4">
            <b>Option2 :</b> &emsp;<textarea type="text" name="option2" className="form-control" onChange={(e) => handleInput(e) } />
            </div>
            <div className="form-outline mb-4">
            <b>Option3 :</b> &emsp;<textarea type="text" name="option3" className="form-control" onChange={(e) => handleInput(e) }/>
            </div>
            <div className="form-outline mb-4">
            <b>Option4 :</b> &emsp;<textarea type="text"  name="option4" className="form-control" onChange={(e) => handleInput(e) } />
            </div>
            <div className="form-outline mb-4">
            <b>Correct Answer :</b> &emsp;<input type="text" name="correctAnswer"  className="form-control" onChange={(e) => handleInput(e) }/>
            </div>
            <div className="form-outline mb-4">
            <b>Marks :</b> &emsp;<input type="number" name="marks" className="form-control" onChange={(e) => handleInput(e) }/>
            </div>
            <br/><br/>
            <div className="row">
              <div className="col-md-4 mb-4">
              <button type="submit" className="btn btn-success btn-mb mb-1"  onClick={UpdateQuestion}>Update</button>
              </div>
              <div className="col-md-4 mb-4">
              <button type="reset" className="btn btn-danger btn-mb mb-1">Reset</button>
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