import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DemoQuiz()
{
    const [answer , setAnswer] = useState({
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:""
    });

    let  correctAnswer  = ['EntityFactory','hibernate.cfg.xml','Scheduler','LIFO-stack','Both of the above'
                            ,'Keypress, keydown, keyup','Call-back is a technique in which a method call back the caller method'
                            ,'Structural testing','Try catch block','The managed heap'] ;
    
    function onRadioButtonChange(e){
       setAnswer({
            ...answer, 
            [e.target.name] : e.target.value
    });  
    }

    let count = 0;
    let score = 0;

    let navigate=useNavigate()

    const submitTest=async()=>
    {
        let status = "";

            if(correctAnswer[0] === answer.answer1) score++;
            if(correctAnswer[1] === answer.answer2) score++;
            if(correctAnswer[2] === answer.answer3) score++;
            if(correctAnswer[3] === answer.answer4) score++;
            if(correctAnswer[4] === answer.answer5) score++;
            if(correctAnswer[5] === answer.answer6) score++;
            if(correctAnswer[6] === answer.answer7) score++;
            if(correctAnswer[7] === answer.answer8) score++;
            if(correctAnswer[8] === answer.answer9) score++;
            if(correctAnswer[9] === answer.answer10) score++;

            alert("Your Demo Quiz is Over...your score is "+score
                 +" Register yourself !!!")
        
    } 

  count++;
      return(
            <>
        <div style={{backgroundImage:'url("https://thumbs.dreamstime.com/b/question-mark-seamless-pattern-trivia-poster-design-template-quiz-loading-page-random-punctuation-marks-background-vector-182361400.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
        <div className="shadow-none p-3 xl-5 ">
            <section className="h-100 h-custom" style={{fontSize:'20px'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-8">
              <div className="card rounded-4 border border-dark">
                <img src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000"
                  className="w-80"alt="" />
                <div className="card-body p-4 p-md-8">      
                  <form className="px-md-1">
                  
{/*--------------------------------------first question------------------------------------------------*/}

                  <div>
    <div className="container xl-6"> <div className="row">
      <div className="col-12">
    <p className="fw-bold">1. Which class is used to create EntityManagerFactory ?</p><div> 
    <div> 
        <input type="radio" name="answer1"  
        onChange={(e) => onRadioButtonChange(e)} value="Persistence" /> 
            <span className="subject"> Persistence </span> 
        <br/>
        <input type="radio" name="answer1"  
        onChange={(e) => onRadioButtonChange(e)} value="EntityManager"/>
            <span className="subject"> EntityManager </span>
            <br/>  
        <input type="radio" name="answer1"
        onChange={(e) => onRadioButtonChange(e)} value="EntityTranscation"/> 
            <span className="subject"> EntityTranscation</span> 
            <br/>
        <input type="radio" name="answer1" 
        onChange={(e) => onRadioButtonChange(e)} value="EntityFactory"/> 
           <span className="subject"> EntityFactory </span> 
    </div> 
    </div> 
    </div> 
    </div>
    </div>

{/*--------------------------------------second question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">2. The hibernate configuration file name is ?</p> 
    <div> 
        <input type="radio" name="answer2"  
        onChange={(e) => onRadioButtonChange(e)} value="http.conf"/> 
            <span className="subject"> http.conf</span> 
        <br/>
        <input type="radio" name="answer2" 
        onChange={(e) => onRadioButtonChange(e)} value="web.config"/>
            <span className="subject"> web.config </span>
            <br/>  
        <input type="radio" name="answer2" 
        onChange={(e) => onRadioButtonChange(e)} value="persistence.xml"/> 
            <span className="subject"> persistence.xml </span> 
            <br/>
        <input type="radio" name="answer2" 
        onChange={(e) => onRadioButtonChange(e)} value="hibernate.cfg.xml"/> 
           <span className="subject"> hibernate.cfg.xml </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------third question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">3. The process of CPU switching to other process is called as ___________ switching ?</p> 
    <div> 
        <input type="radio" name="answer3"  
        onChange={(e) => onRadioButtonChange(e)} value="Context"/> 
            <span className="subject"> Context</span> 
        <br/>
        <input type="radio" name="answer3"  
        onChange={(e) => onRadioButtonChange(e)} value="Process"/>
            <span className="subject"> Process </span>
            <br/>  
        <input type="radio" name="answer3"  
        onChange={(e) => onRadioButtonChange(e)} value="Scheduler"/> 
            <span className="subject"> Scheduler </span> 
            <br/>
        <input type="radio" name="answer3"  
        onChange={(e) => onRadioButtonChange(e)} value="Thread"/> 
           <span className="subject"> Thread </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------fourth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">4. The FCFS CPU scheduling policy can be conveniently implemented using the 
    following data structure: ?</p> 
    <div> 
        <input type="radio" name="answer4"  
        onChange={(e) => onRadioButtonChange(e)} value="LIFO-stack"/> 
            <span className="subject"> LIFO-stack</span> 
        <br/>
        <input type="radio" name="answer4"  
        onChange={(e) => onRadioButtonChange(e)} value="Binary tree "/>
            <span className="subject"> Binary tree </span>
            <br/>  
        <input type="radio" name="answer4" 
        onChange={(e) => onRadioButtonChange(e)} value="Directed acylic graph"/> 
            <span className="subject"> Directed acylic graph </span> 
            <br/>
        <input type="radio" name="answer4"  
        onChange={(e) => onRadioButtonChange(e)} value="Queue"/> 
           <span className="subject"> Queue</span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------fifth question------------------------------------------------*/}

<div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">5. Which of the following is a valid type of function java script supports ?</p> 
    <div> 
        <input type="radio" name="answer5"  
        onChange={(e) => onRadioButtonChange(e)} value="named function"/> 
            <span className="subject"> named function</span> 
        <br/>
        <input type="radio" name="answer5"  
        onChange={(e) => onRadioButtonChange(e)} value="anonymous function"/>
            <span className="subject"> anonymous function </span>
            <br/>  
        <input type="radio" name="answer5"  
        onChange={(e) => onRadioButtonChange(e)} value="Both of the above"/> 
            <span className="subject"> Both of the above </span> 
            <br/>
        <input type="radio" name="answer5" 
        onChange={(e) => onRadioButtonChange(e)} value="None of the above"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------sixth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">6. What is the order of events when a key is typed ?</p> 
    <div> 
        <input type="radio" name="answer6" 
        onChange={(e) => onRadioButtonChange(e)} value="Keydown, Keypress, keyup"/> 
            <span className="subject"> Keydown, Keypress, keyup</span> 
        <br/>
        <input type="radio" name="answer6"  
        onChange={(e) => onRadioButtonChange(e)} value="keypress, keydown, keyup"/>
            <span className="subject"> keypress, keydown, keyup </span>
            <br/>  
        <input type="radio" name="answer6"  
        onChange={(e) => onRadioButtonChange(e)} value="keyup, keydown, keypress"/> 
            <span className="subject"> keyup, keydown, keypress </span> 
            <br/>
        <input type="radio" name="answer6"  
        onChange={(e) => onRadioButtonChange(e)} value="keydown, keyup, keypress"/> 
           <span className="subject"> keydown, keyup, keypress </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------seventh question------------------------------------------------*/}


    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">7. What is Callback ?</p> 
    <div> 
        <input type="radio" name="answer7"  
        onChange={(e) => onRadioButtonChange(e)} value="Callback is an asynchronous equivalent for a function"/> 
            <span className="subject"> Callback is an asynchronous equivalent for a function</span> 
        <br/>
        <input type="radio" name="answer7"  
        onChange={(e) => onRadioButtonChange(e)} value="Call-back is a technique in which a method call back the caller method"/>
            <span className="subject"> Call-back is a technique in which a method call back the caller method </span>
            <br/>  
        <input type="radio" name="answer7"  
        onChange={(e) => onRadioButtonChange(e)} value="Both of the above"/> 
            <span className="subject"> Both of the above </span> 
            <br/>
        <input type="radio" name="answer7"  
        onChange={(e) => onRadioButtonChange(e)} value="None of the above"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------eight question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">8. Which of the following testing is also known as white-box testing ?</p> 
    <div> 
        <input type="radio" name="answer8" 
        onChange={(e) => onRadioButtonChange(e)} value="tructural testing"/> 
            <span className="subject"> Structural testing</span> 
        <br/>
        <input type="radio" name="answer8" 
        onChange={(e) => onRadioButtonChange(e)} value="Error guessing technique"/>
            <span className="subject"> Error guessing technique </span>
            <br/>  
        <input type="radio" name="answer8" 
        onChange={(e) => onRadioButtonChange(e)} value="Design based testing"/> 
            <span className="subject"> Design based testing </span> 
            <br/>
        <input type="radio" name="answer8" 
        onChange={(e) => onRadioButtonChange(e)} value="None of the above"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------ninth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">9. To Handel exception in C# you must use ?</p> 
    <div> 
        <input type="radio" name="answer9"   
        onChange={(e) => onRadioButtonChange(e)} value="Try catch block"/> 
            <span className="subject"> Try catch block</span> 
        <br/>
        <input type="radio" name="answer9"   
        onChange={(e) => onRadioButtonChange(e)} value="Only try"/>
            <span className="subject"> Only try </span>
            <br/>  
        <input type="radio" name="answer9"   
        onChange={(e) => onRadioButtonChange(e)} value="Try-finally"/> 
            <span className="subject"> Try-finally </span> 
            <br/>
        <input type="radio" name="answer9"   
        onChange={(e) => onRadioButtonChange(e)} value="None of the above"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------tenth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">10. From which one of the following locations does the garbage collector remove objects ?</p> 
    <div> 
        <input type="radio" name="answer10"  
        onChange={(e) => onRadioButtonChange(e)} value="The system registry"/> 
            <span className="subject"> The system registry</span> 
        <br/>
        <input type="radio" name="answer10"   
        onChange={(e) => onRadioButtonChange(e)} value="The thread stack"/>
            <span className="subject"> The thread stack </span>
            <br/>  
        <input type="radio" name="answer10"   
        onChange={(e) => onRadioButtonChange(e)} value="The managed heap"/> 
            <span className="subject"> The managed heap </span> 
            <br/>
        <input type="radio" name="answer10"   
        onChange={(e) => onRadioButtonChange(e)} value="None of the above"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>


</div>
      
                    <div className="row">
                        <div className="col-sm-6 sm-6" style={{alignItems:'center'}}> 
                        <Link to="/" className="btn btn-dark btn-mb mb-1" >Homepage</Link>
                        &emsp;&emsp;<button className="btn btn-success btn-mb mb-1" onClick={submitTest} >Submit Quiz</button>
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