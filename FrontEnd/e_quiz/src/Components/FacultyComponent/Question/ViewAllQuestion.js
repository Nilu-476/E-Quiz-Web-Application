import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-lg-8 col-xl-8">
                  <div className="card rounded-4 border border-dark">
                    <img src="https://veeroesquotes.com/wp-content/uploads/2019/07/quote-Exam13.jpg"
                      className="w-80"alt="" />
                    <div className="card-body p-4 p-md-8">      
                      <form className="px-md-1">
                      {
                        AllQuestions.map((data,i)=>
                        {
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
                                    <h6>__________________________________________________________________________________________</h6>
                                    </div> 
                                    </div> 
                                    </div>
                                    </div>
                                    </div>
                              )
                        })
                      }
      
                        <div className="row">
                            <div className="col-sm-6 sm-6" style={{alignItems:'center'}}> 
                            <Link to="/" className="btn btn-dark btn-mb mb-1" >Homepage</Link>
                            &emsp;&emsp;<Link to="/Result" className="btn btn-success btn-mb mb-1" >Submit Quiz</Link>
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