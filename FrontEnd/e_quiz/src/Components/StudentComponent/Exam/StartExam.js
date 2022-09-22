import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

export default function StartExam()
{

  const [array,setArray]=useState([]);

  let navigate = useNavigate();

    // ....................................................................

      let {quizId}=useParams('quizId');
      console.log("QuizId : ",quizId);
      const data =sessionStorage.getItem('student');
      const { prnNo ,firstName , middleName , lastName ,username}=JSON.parse(data);
      console.log(prnNo);
      console.log(username);

  // ....................................................................

      const [Result,setResult]=useState([]);

      useEffect(() => {
        async function GetAllQuestions(){
            let value = await axios.get(`http://localhost:8080/managequestion/getallquestion/${quizId}`);
            setResult(value.data);
        }
        GetAllQuestions();
    },[])

    // fetches all the Questions

    const [Option, setOption] = useState({
      option1:"",
      option2:"",
      option3:"",
      option4:""
    });

    let Answer=[]
    let count = 0;
    var CorrectAnswer  = [] ; // Array of Correct Answers

    function onRadioButtonChange(e)
    {
      setOption({
            ...Option, 
            [e.target.name] : e.target.value
    }); 
    console.log("Array : ",array);
  }

    const CalculateResult= async(e)=>
    {
        e.preventDefault();
        console.log("Async Function")
        console.log("Result : ",Result);
        console.log("Student Selected Options : ",Option);
        console.log("Result Length : ",Result.length)

        for(let i=0; i<Result.length ;i++)
        {
            console.log("inside for Loop1 ...");
             CorrectAnswer.push( Result[i].correctAnswer);
            //  console.log("Correct Answer Array ",CorrectAnswer);
            // if(CorrectAnswer[i] === option.option[i]) 
            // console.log("Answer : ",option.option[i]);
            // score++;

        }
        let score = 0;

        console.log("CorrectAnswer : ",CorrectAnswer);
        for(let j=0 ; j<CorrectAnswer.length ;j++)
        {
          var x="option"+(j+1);
          console.log(x);
          console.log("inside for Loop2 ...",Option.x);
          if(CorrectAnswer[j] === Option[x]) 
          {
            score++;
            console.log("inside If Loop Score : ",score);
          }
        }
        
        
        var date = new Date();
        var d =  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() ;
   
        var cdate=JSON.stringify(d);
        console.log(cdate);
        console.log("Date : ",d);
       const Answerdata=
       {
         "quizGivenDate":"2022-09-26",
         "marksObtained":score,
         "totalMarks":count,
         "student":{"username":(username)}
         
       };

       axios.post(`http://localhost:8080/result/addstudentresult/${quizId}`, Answerdata
       ).then((result)=>
       {
        console.log(result);
        navigate(`/ExamResult/${quizId}`);
       }).catch((e)=>
       {
        console.log(e);
      })

    } // async function ends



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
                    <div className="main navbar">
                    <h4> &emsp;Best Of Luck {firstName} {middleName} {lastName} </h4>
                    </div>  
                    <div className="card-body p-4 p-md-8"> 
   
                      <form className="px-md-1">
                      {
                        Result.map((data,i)=>
                        {
                          count++;
                              sessionStorage.setItem('questionId',data);
                              return(
                                    <div key={i}>
                                    <div className="container xl-6"> <div className="row">
                                    <div className="col-12">
                                    <p className="fw-bold">{i+1} {data.questionText}</p><div> 
                                    <div> 
                                    <input type="radio" name={"option"+count}  value={data.option1} 
                                    onChange={(e) => onRadioButtonChange(e)}/> 
                                    <label htmlFor="option1" className="subject">&emsp;{data.option1} </label> 
                                    <br/>
                                    <input type="radio" name={"option"+count} value={data.option2}
                                    onChange={(e) => onRadioButtonChange(e)}
                                    />
                                    <label htmlFor="option2" className="subject">&emsp;{data.option2} </label> 
                                    <br/>  
                                    <input type="radio" name={"option"+count} value={data.option3}
                                    onChange={(e) => onRadioButtonChange(e)}/> 
                                    <label htmlFor="option3" className="subject">&emsp;{data.option3} </label> 
                                    <br/>
                                    <input type="radio" name={"option"+count} value={data.option4}
                                    onChange={(e) => onRadioButtonChange(e)}/> 
                                    <label htmlFor="option4" className="subject">&emsp;{data.option4} </label> 
                                    </div> 
                                    <br/>
                                    <h6>__________________________________________________________________________________________</h6>
                                    </div> 
                                    </div> 
                                    </div>
                                    </div>
                                    </div>
                              )
                        })
                      }
                    <button className="btn btn-success btn-sm mb-1" onClick={CalculateResult}>Save and Submit</button>
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