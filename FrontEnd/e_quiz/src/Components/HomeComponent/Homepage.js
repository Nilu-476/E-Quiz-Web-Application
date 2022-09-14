import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage()
{
 
      
        return(
      <body className="main col-xl-12 w-100 p-3">
      <div className="header">
            <h1>E-Quiz Web Application</h1>
      </div>
 
      <div className="navbar">
            <Link to="/StudentLogin">Student Login</Link>
            <Link to="/FacultyLogin">Faculty Login</Link>
            <Link to="/DemoQuiz">Demo Quiz</Link>
            <div className="dropdown">
                  <button className="dropbtn">Create a Account
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                        <Link to="/StudentRegistration">Register as Student</Link>
                        <Link to="/FacultyRegistration">Register as Faculty</Link>
                  </div>
            </div>
            </div>                  
            <div className="row">
                <div className="main" align="center">
            <img src="https://cdn.images.express.co.uk/img/dynamic/130/590x/Easy-quiz-questions-1282929.jpg?r=1621866486163" alt="" />
            </div>
      <div className='row  lh-lg' >
      <div className='col-xs-6 col-sm-4 text-dark'>
      <div className="card  bg-info " style={{width: "25rem"}}>
      <img src="https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-10.png" class="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <h5 className="card-title"><h2>About us</h2></h5>
      <p className="card-text">
            <h3>
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </h3>
            </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-xs-6 col-sm-4 text-dark'>
      <div className="card  bg-info " style={{width: "25rem"}}>
      <img src="https://static.ess.com/uploads/Teaching-Icon.png" class="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <h5 className="card-title"><h2>Teacher</h2></h5>
      <p className="card-text">
            <h3>
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </h3>
            </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-xs-6 col-sm-4 text-dark fw-bolder'>
      <div className="card  bg-info " style={{width: "25rem"}}>
      <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png" className="card-img-top align-center" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
      <div className="card-body">
      <h5 className="card-title"><h2>Student</h2></h5>
      <p className="card-text">
            <h3>
            teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            the Registered student can access the test and can track his 
            performance of test of all subjects shown by the chart
            </h3>
            </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
      </div>
      </div>
     
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="footer">
            <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
      </div>      
</body>
            )
      }