import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage()
{
 
      
        return(
            <>
      <body className="main">
      <div className="header">
            <h1>E-Quiz Web Application</h1>
      </div>
      <div className="navbar">
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
            <div className="card  bg-secondary ">
      <img src="https://icon-library.com/images/questions-icon/questions-icon-8.jpg" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title"><h3>Demo Test</h3></div>
      <h4><p className="card-text text-dark">
            Take a Demo test
            </p></h4>
            <Link to="/DemoQuiz" className="btn btn-primary sm-12">Demo Quiz</Link>
  </div>
</div>

      <div className='row  xl navbar bg-danger light' >
      <div className='col-xl-4  text-light'>
      <div className="card  bg-transparent" style={{width: "23rem"}}>
      <img src="https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-10.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title"><h2>About us</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the char
            </p> </h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-xl-4 text-light'>
      <div className="card  bg-transparent " style={{width: "23rem"}}>
      <img src="https://static.ess.com/uploads/Teaching-Icon.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title"><h2>Techer</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </p></h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-xl-4 text-light fw-bolder'>
      <div className="card  bg-transparent" style={{width: "23rem"}}>
      <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png" className="card-img-top align-center" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <div className="card-title"><h2>Student</h2></div>
      <h3><p className="card-text fw-bold text-light">
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </p> </h3>
      <a href="/..." className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
      </div>
      <div className="row col xl-6 text-light navbar bg-transparent align-center">
                <div className=" card " align="center">
            <img src="https://cdn.images.express.co.uk/img/dynamic/130/590x/Easy-quiz-questions-1282929.jpg?r=1621866486163" alt="" />
            </div>   
</div> 
      <div className="footer main">
            <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
      </div>      
</body>
</>
            )
      }