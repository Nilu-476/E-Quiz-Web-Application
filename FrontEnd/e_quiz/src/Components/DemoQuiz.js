export default function DemoQuiz()
{
      return(
            <>
           < div className="shadow-none p-3 mb-5 bg-info bg-gradient">
                  <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-4">
                <img src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000"
                  className="w-80"alt="" />
                <div className="card-body p-4 p-md-8">      
                  <form className="px-md-1">
                  
                  <div>
    <div className="container xl-6"> <div className="row">
      <div className="col-12">
    <p className="fw-bold">1. Which of the following sentences is correct ?</p><div> 
    <div> 
        <input type="radio" name="box" id="five"/> 
            <span className="subject"> When its raining ,people's umbrella are all you're going to see from above </span> 
        <br/>
        <input type="radio" name="box" id="six"/>
            <span className="subject"> When its raining,people's umbrella are all your going to see from above </span>
            <br/>  
        <input type="radio" name="box" id="seven"/> 
            <span className="subject">When its raining,peoples umbrella's are all you're going to see from above</span> 
            <br/>
        <input type="radio" name="box" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div> 
    </div> 
    </div>
    </div>
    <div className="container mb-5"> <div className="row"> <div className="col-12">
    <p className="fw-bold mt-5">2. Complete the following sentences:Alice couldn't _______ the humilation any longer and stormed out of the room red as a bed ?</p> 
    <div> 
        <input type="radio" name="box" id="five"/> 
            <span className="subject"> is</span> 
        <br/>
        <input type="radio" name="box" id="six"/>
            <span className="subject"> was </span>
            <br/>  
        <input type="radio" name="box" id="seven"/> 
            <span className="subject"> will </span> 
            <br/>
        <input type="radio" name="box" id="eight"/> 
           <span className="subject"> None of the above </span> 
    </div> 
    </div>
    </div>
    </div>

</div>
      
                    <div className="row">
                        <div className="col-sm-6 sm-6"> 
                        <button type="submit" className="btn btn-success btn-sm mb-1" style={{alignSelf:"center"}}>Submit Quiz</button>
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