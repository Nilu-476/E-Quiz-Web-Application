import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

export default function ViewAllQuestion()
{
      const [AllQuestions,setAllQuestions]=useState([]);

      let {quizId}=useParams('quizId');
      console.log("QuizId : ",quizId);
      useEffect(()=>
      {
            async function GetAllQuestion()
            {
                  let value = await axios.get(`http://localhost:8080/managequestion/getallquestion/${quizId}`);
                  setAllQuestions(value.data);
            }
            GetAllQuestion();
      },[]);

      return(
            <>
            <div style={{backgroundImage:'url("https://thumbs.dreamstime.com/b/question-mark-seamless-pattern-trivia-poster-design-template-quiz-loading-page-random-punctuation-marks-background-vector-182361400.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <div className="shadow-none p-3 xl-5 ">
            <section className="h-100 h-custom" style={{fontSize:'20px'}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-lg-8 col-xl-9">
                  <div className="card rounded-4 border border-dark">
                    <img src="https://veeroesquotes.com/wp-content/uploads/2019/07/quote-Exam13.jpg"
                      className="w-80"alt="" />
                        <div className="header">
                    <Link to="/ViewQuiz" className="btn btn-dark btn-lg mb-1">Back to DashBoard</Link>
                    </div>
                    <div className="card-body p-4 p-md-8">   
                      <form className="px-md-1">
                      {
                        AllQuestions.map((data,i)=>
                        {
                              sessionStorage.setItem('questionId',data);
                              return(
                                    <div key={i}>
                                    <div className="container xl-6"> <div className="row">
                                    <div className="col-12">
                                    <p className="fw-bold">{data.questionId} {data.questionText}</p><div> 
                                    <div> 
                                    <input type="radio" name="box1" id="five"/> 
                                    <span className="subject">{data.option1} </span> 
                                    <br/>
                                    <input type="radio" name="box1" id="six"/>
                                    <span className="subject"> {data.option2} </span>
                                    <br/>  
                                    <input type="radio" name="box1" id="seven"/> 
                                    <span className="subject"> {data.option3}</span> 
                                    <br/>
                                    <input type="radio" name="box1" id="eight"/> 
                                    <span className="subject"> {data.option4} </span> 
                                    </div> 
                                    <br/>
                                    <NavLink exact to={`/UpdateQuestion/${JSON.stringify(data.questionId)}/${quizId}`}>
                                    <button className="btn btn-success btn-mb mb-1">Update</button>
                                    </NavLink>
                                     &emsp;&emsp;
                                    <NavLink exact to={`/DeleteQuestion/${JSON.stringify(data.questionId)}/${quizId}`}>
                                     <button className="btn btn-danger btn-mb mb-1">Delete</button>
                                     </NavLink>
                                    <h6>__________________________________________________________________________________________</h6>
                                    </div> 
                                    </div> 
                                    </div>
                                    </div>
                                    </div>
                              )
                        })
                      }
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