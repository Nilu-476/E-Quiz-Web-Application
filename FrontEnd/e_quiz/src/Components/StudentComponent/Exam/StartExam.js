
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export default function StartExam()
{
       // ---------------------------------------------------------
    let { id } = useParams();
    let { category } = useParams();

    const [allQuestions , setAllQuestions] = useState([]);
    // React hook



    useEffect(() => {
        async function getAllQuestions(){
            let value = await axios.get(`http://localhost:8080/exam/${id}/question`);
            setAllQuestions(value.data);
            //console.log(value.data);
        }
        getAllQuestions();
    },[id]);

    // ---------------------------------------------------------
    
    // const [userAnswer , setUserAnswer] = useState({
    //     answer1:"",
    //     answer2:"",
    //     answer3:"",
    // });

    const [answer , setAnswer] = useState({
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        answer5:"",
    });


    let  correctAnswer  = [] ;
    
    function onRadioButtonChange(e){
       setAnswer({
            ...answer, 
            [e.target.name] : e.target.value
    });
}
// .................................................

      let count = 0;

      async function submitTest()
      {
      for(let i=0; i<allQuestions.length ;i++)
        {
             correctAnswer.push( allQuestions[i].answer);
        }

        let score = 0; // to count the Score
        let status = "";

            if(correctAnswer[0] === answer.answer1) score++;
            if(correctAnswer[1] === answer.answer2) score++;
            if(correctAnswer[2] === answer.answer3) score++;
            if(correctAnswer[3] === answer.answer4) score++;
            if(correctAnswer[4] === answer.answer5) score++;
        
        // console.log(score);
  
         if(score >= 16 ) status="Pass"; // for 40 Marks Exam  
         else status = "Fail";

        


        var date = new Date();
        var d =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() ;
        var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;
   
       let data={
         "status": status,
         "score": score,
         "email":{"email":sessionStorage.getItem("user")},    // email
         "edate": d+" "+t,
         "sname": {"name":category},   // --  subject name
         "totalMarks": "5",
         "examId": {"id":id},         // exam id
         "totalQuestion": "40"
       };

       //console.log(data);
 
       await axios.post(`http://localhost:8080/result` , data);
        history.push("/StudentDashboard/Result");
    }

     let history = useEffect;

      return(
            <>
            <div className="shadow-none p-5 xl-5 bg-info bg-gradient">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
            <div className="card rounded-4">
            <img src="https://veeroesquotes.com/wp-content/uploads/2019/07/quote-Exam13.jpg"
            className="w-80"alt="" />
            <div className="card-body p-4 p-md-8">
            <form className="px-md-1">
            <div >
                <h3>Answer all the questions</h3>
            </div>
            {
                 
                allQuestions.map((data , i) => {
                        count++;
                    return (
                        <div key={i} className="form-outline mb-4">
                        <div > <span>{data.qname}</span> </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.optionOne}
                          name={"answer"+count}   type="radio" />  
                            <label htmlFor="option1">{data.optionOne}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.optionTwo}
                         name={"answer"+count} type="radio" /> 
                            <label htmlFor="option2">{data.optionTwo}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.optionThree}
                           name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option3">{data.optionThree}</label>
                        </div>
        
                        <div>
                            <input onChange={(e) => onRadioButtonChange(e)} value={data.optionFour}
                             name={"answer"+count}  type="radio" /> 
                            <label htmlFor="option4">{data.optionFour}</label>
                        </div>
                    </div>
                    );
                  
                })
            }
              <div className="row">
                  <div className="col-md-4 mb-4"> 
                  <button type="submit" onClick={submitTest} className="btn btn-success btn-mb mb-1">Submit</button>
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
      );
}


