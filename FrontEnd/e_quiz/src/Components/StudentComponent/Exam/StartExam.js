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
        // for(let j=0 ; j<CorrectAnswer.length ;j++)
        // {
        //   var x="option"+(j+1);
        //   console.log(x);
        //   console.log("inside for Loop2 ...",Option.x);
        //   console.log(Option.option(j));
        //   if(CorrectAnswer[j] === Option[j].option[j+1]) 
        //   {
        //     score++;
        //     console.log("inside If Loop Score : ",score);
        //   }
        // }
        

            if(CorrectAnswer[0] === Option.option1) score++;
            if(CorrectAnswer[1] === Option.option2) score++;
            if(CorrectAnswer[2] === Option.option3) score++;
            if(CorrectAnswer[3] === Option.option4) score++;
            if(CorrectAnswer[4] === Option.option5) score++;
            if(CorrectAnswer[5] === Option.option6) score++;
            if(CorrectAnswer[6] === Option.option7) score++;
            if(CorrectAnswer[7] === Option.option8) score++;
            if(CorrectAnswer[8] === Option.option9) score++;
            // if(CorrectAnswer[9] === option.option10) score++;
            // if(CorrectAnswer[10] === option.option11) score++;
            // if(CorrectAnswer[11] === option.option12) score++;
            // if(CorrectAnswer[12] === option.option13) score++;
            // if(CorrectAnswer[13] === option.option14) score++;
            // if(CorrectAnswer[14] === option.option15) score++;
            // if(CorrectAnswer[15] === option.option16) score++;
            // if(CorrectAnswer[16] === option.option17) score++;
            // if(CorrectAnswer[17] === option.option18) score++;
            // if(CorrectAnswer[18] === option.option19) score++;
            // if(CorrectAnswer[19] === option.option20) score++;
            // if(CorrectAnswer[20] === option.option21) score++;
            // if(CorrectAnswer[21] === option.option22) score++;
            // if(CorrectAnswer[22] === option.option23) score++;
            // if(CorrectAnswer[23] === option.option24) score++;
            // if(CorrectAnswer[24] === option.option25) score++;
            // if(CorrectAnswer[25] === option.option26) score++;
            // if(CorrectAnswer[26] === option.option27) score++;
            // if(CorrectAnswer[27] === option.option28) score++;
            // if(CorrectAnswer[28] === option.option29) score++;
            // if(CorrectAnswer[29] === option.option30) score++;
            // if(CorrectAnswer[30] === option.option31) score++;
            // if(CorrectAnswer[31] === option.option32) score++;
            // if(CorrectAnswer[32] === option.option33) score++;
            // if(CorrectAnswer[33] === option.option34) score++;
            // if(CorrectAnswer[34] === option.option35) score++;
            // if(CorrectAnswer[35] === option.option36) score++;
            // if(CorrectAnswer[36] === option.option37) score++;
            // if(CorrectAnswer[37] === option.option38) score++;
            // if(CorrectAnswer[38] === option.option39) score++;
            // if(CorrectAnswer[39] === option.option40) score++;
            // if(CorrectAnswer[40] === option.option41) score++;
            // if(CorrectAnswer[41] === option.option42) score++;
            // if(CorrectAnswer[42] === option.option43) score++;
            // if(CorrectAnswer[43] === option.option44) score++;
            // if(CorrectAnswer[44] === option.option45) score++;
            // if(CorrectAnswer[45] === option.option46) score++;
            // if(CorrectAnswer[46] === option.option47) score++;
            // if(CorrectAnswer[47] === option.option48) score++;
            // if(CorrectAnswer[48] === option.option49) score++;
            // if(CorrectAnswer[49] === option.option50) score++;
            // if(CorrectAnswer[50] === option.option51) score++;

        
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