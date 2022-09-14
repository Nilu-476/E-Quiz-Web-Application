import './feedback.css';
 
export default function Feedback()
{
    return(
        <>
        < div className="shadow-none p-3 mb-5 bg-info bg-gradient">
                  <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmroRrLZOAELBCWAK7NKN4P-BM8S4c0BJtlQ&usqp=CAU"
                  className="w-80" alt="" />
                <div className="card-body p-4 p-md-8">      
                  <form className="px-md-1">

{/*----------------------------------------------------------------------------------------------------*/}

<div className="container">    
    <form>  

      <div className="row">    
        <div className="col-25">    
          <label htmlFor="fname" >First Name</label>    
        </div>    
        <div className="col-75">    
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>    
        </div>    
      </div>

    <br></br>

      <div className="row">    
        <div className="col-25">    
          <label htmlFor="lname">Last Name</label>    
        </div>    
        <div className="col-75">    
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>    
        </div>    
      </div> 

    <br></br>

      <div className="row">    
          <div className="col-25">    
            <label htmlFor="email">Mail Id</label>    
          </div>    
          <div className="col-75">    
            <input type="email" id="email" name="mailid" placeholder="Your mail id.."/>    
          </div>    
        </div>

    <br></br>

      <div className="row">    
        <div className="col-25">    
          <label htmlFor="country">Country</label>    
        </div>    
        <div className="col-75">    
          <select id="country" name="country">    
              <option value="none">Select Country</option>    
            <option value="australia">Australia</option>    
            <option value="canada">Canada</option>    
            <option value="usa">USA</option>    
            <option value="russia">Russia</option>    
            <option value="japan">Japan</option>    
            <option value="india">India</option>    
            <option value="china">China</option>    
          </select>    
        </div>    
      </div> 

    <br></br>

      <div className="row">    
        <div className="col-25">    
          <label htmlFor="feed_back">Feedback</label>    
        </div>    
        <div className="col-75">    
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>    
        </div>    
      </div> 

    <br></br>

      <div className="row">    
        <input type="submit" value="Submit"/>    
      </div> 

    </form>    
  </div> 


{/*----------------------------------------------------------------------------------------------------*/}

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