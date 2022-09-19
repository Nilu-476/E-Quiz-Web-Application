import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage()
{
 
      
        return(
            <>
      <body className="main">
      <div className='sticky-top class'>      
      <div className=" header">
      <h1>E-Quiz Web Application</h1>
      </div>
      <div className="navbar sticky-top class  navbar-brand ">
            <Link to="/StudentLogin">Student Login</Link>
            <Link to="/FacultyLogin">Faculty Login</Link>
            <div className="dropdown">
                  <button className="dropbtn">Create Account
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                        <Link to="/StudentRegistration">Register as Student</Link>
                        <Link to="/FacultyRegistration">Register as Faculty</Link>
                  </div>
            </div>
            </div> 
            </div>
   
      <div className="card demo ">
      <br/><br/><br/><br/>
      <img src="https://cdn.pixabay.com/photo/2018/08/31/11/17/quiz-3644414_960_720.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title" style={{textAlign:"center"}}><h3>Take a Demo Test</h3>
            <Link to="/DemoQuiz" className="btn btn-success btn-lg lg-12">START</Link>
            </div>
  </div>
</div>
      <div className='row about'>
      <div className='col-xl-4  text-light '>
      <div className="bg-transparent" style={{width: "28rem"}}>
      <br/><br/><br/><br/><br/>
      <div style={{textAlign:'justify'}}>
      <img src="https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-10.png" className="card-img-top" style={{width:"300px",height:"300px" , resize:'contain' ,alignSelf:'center' }} alt="..."/>
      <div className="card-body ">
      <br/>
      <div  className="card-title"><h2>&emsp;&emsp;&emsp;About us</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the char
            </p> </h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
      <br/><br/><br/><br/><br/>
      </div>
  </div>
</div>
</div>
<div className='col-xl-4 text-light'>
      <div className="bg-transparent " style={{width: "28rem"}}>
      <br/><br/><br/><br/><br/>
      <img src="https://static.ess.com/uploads/Teaching-Icon.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div style={{textAlign:'justify'}}>
      <br/>
      <div className="card-title"><h2>&emsp;&emsp;&emsp;Techer</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </p></h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
      <br/><br/><br/><br/><br/>
      </div>
  </div>
</div>
</div>
<div className='col-xl-4 text-light fw-bolder'>
      <div className="bg-transparent" style={{width: "28rem"}}>
      <br/><br/><br/><br/><br/>
      <div style={{textAlign:'justify'}}>
      <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png" className="card-img-top align-center" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <br/>
      <div className="card-title"><h2>&emsp;&emsp;&emsp;Student</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </p> </h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
      <br/><br/><br/><br/><br/>
      </div>
  </div>
</div>
</div>
<div className="card contactus ">
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <img src="https://cdn.pixabay.com/photo/2018/08/31/11/17/quiz-3644414_960_720.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title" style={{textAlign:"center"}}><h3>Take a Demo Test</h3>
            <Link to="/DemoQuiz" className="btn btn-success btn-lg lg-12">START</Link>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
            </div>
  </div>
</div>
</div> 
      <div className="footer main">
            <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
      </div>      
</body>
</>
            )
      }