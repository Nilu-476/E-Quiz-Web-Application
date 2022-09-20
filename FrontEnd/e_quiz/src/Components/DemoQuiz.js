import { Link } from "react-router-dom";

export default function DemoQuiz()
{
      return(
            <>
        <div style={{backgroundImage:'url("https://thumbs.dreamstime.com/b/question-mark-seamless-pattern-trivia-poster-design-template-quiz-loading-page-random-punctuation-marks-background-vector-182361400.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
        <div className="shadow-none p-3 xl-5 ">
        <section className="h-100 h-custom">
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
        <input type="radio" name="box1" id="five"/> 
            <span className="subject"> Persistence </span> 
        <br/>
        <input type="radio" name="box1" id="six"/>
            <span className="subject"> EntityManager </span>
            <br/>  
        <input type="radio" name="box1" id="seven"/> 
            <span className="subject"> EntityTranscation</span> 
            <br/>
        <input type="radio" name="box1" id="eight"/> 
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
        <input type="radio" name="box2" id="five"/> 
            <span className="subject"> http.conf</span> 
        <br/>
        <input type="radio" name="box2" id="six"/>
            <span className="subject"> web.config </span>
            <br/>  
        <input type="radio" name="box2" id="seven"/> 
            <span className="subject"> persistence.xml </span> 
            <br/>
        <input type="radio" name="box2" id="eight"/> 
           <span className="subject"> hibernate.cfg.xml </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------third question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">3. The process of CPU switching to other process is called as ___________ switching ?</p> 
    <div> 
        <input type="radio" name="box3" id="five"/> 
            <span className="subject"> Context</span> 
        <br/>
        <input type="radio" name="box3" id="six"/>
            <span className="subject"> Process </span>
            <br/>  
        <input type="radio" name="box3" id="seven"/> 
            <span className="subject"> Scheduler </span> 
            <br/>
        <input type="radio" name="box3" id="eight"/> 
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
        <input type="radio" name="box4" id="five"/> 
            <span className="subject"> LIFO-stack</span> 
        <br/>
        <input type="radio" name="box4" id="six"/>
            <span className="subject"> Binary tree </span>
            <br/>  
        <input type="radio" name="box4" id="seven"/> 
            <span className="subject"> Directed acylic graph </span> 
            <br/>
        <input type="radio" name="box4" id="eight"/> 
           <span className="subject"> Queue</span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------fifth question------------------------------------------------*/}

<div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">5. Which of the following is a valid type of function java script supports ?</p> 
    <div> 
        <input type="radio" name="box5" id="five"/> 
            <span className="subject"> named function</span> 
        <br/>
        <input type="radio" name="box5" id="six"/>
            <span className="subject"> anonymous function </span>
            <br/>  
        <input type="radio" name="box5" id="seven"/> 
            <span className="subject"> Both of the above </span> 
            <br/>
        <input type="radio" name="box5" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------sixth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">6. What is the order of events when a key is typed ?</p> 
    <div> 
        <input type="radio" name="box6" id="five"/> 
            <span className="subject"> Keydown, Keypress, keyup</span> 
        <br/>
        <input type="radio" name="box6" id="six"/>
            <span className="subject"> keypress, ketdown, keyup </span>
            <br/>  
        <input type="radio" name="box6" id="seven"/> 
            <span className="subject"> keyup, keydown, keypress </span> 
            <br/>
        <input type="radio" name="box6" id="eight"/> 
           <span className="subject"> keydown, keyup, keypress </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------seventh question------------------------------------------------*/}


    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">7. What is Callback ?</p> 
    <div> 
        <input type="radio" name="box7" id="five"/> 
            <span className="subject"> Callback is an asynchronous equivalent for a function</span> 
        <br/>
        <input type="radio" name="box7" id="six"/>
            <span className="subject"> Call-back is a technique in which a method call back the caller method </span>
            <br/>  
        <input type="radio" name="box7" id="seven"/> 
            <span className="subject"> Both of the above </span> 
            <br/>
        <input type="radio" name="box7" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------eight question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">8. Which of the following testing is also known as white-box testing ?</p> 
    <div> 
        <input type="radio" name="box8" id="five"/> 
            <span className="subject"> Structural testing</span> 
        <br/>
        <input type="radio" name="box8" id="six"/>
            <span className="subject"> Error guessing technique </span>
            <br/>  
        <input type="radio" name="box8" id="seven"/> 
            <span className="subject"> Design based testing </span> 
            <br/>
        <input type="radio" name="box8" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------ninth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">9. To Handel exception in C# you must use ?</p> 
    <div> 
        <input type="radio" name="box9" id="five"/> 
            <span className="subject"> Try catch block</span> 
        <br/>
        <input type="radio" name="box9" id="six"/>
            <span className="subject"> Only try </span>
            <br/>  
        <input type="radio" name="box9" id="seven"/> 
            <span className="subject"> Try – finally </span> 
            <br/>
        <input type="radio" name="box9" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

{/*--------------------------------------tenth question------------------------------------------------*/}

    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">10. From which one of the following locations does the garbage collector remove objects ?</p> 
    <div> 
        <input type="radio" name="box10" id="five"/> 
            <span className="subject"> The system registry</span> 
        <br/>
        <input type="radio" name="box10" id="six"/>
            <span className="subject"> The thread stack </span>
            <br/>  
        <input type="radio" name="box10" id="seven"/> 
            <span className="subject"> The managed heap </span> 
            <br/>
        <input type="radio" name="box10" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>


</div>
      
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