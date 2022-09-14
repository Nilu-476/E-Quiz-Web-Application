import { Link } from 'react-router-dom';
import './Homepage.css';
export default function Homepage()
{
 
      
        return(
      <body className="main">
      <div className="header">
            <h1>E-Quiz Web Application</h1>
      </div>
 
      <div className="navbar">
            <Link to="/StudentLogin">Student Login</Link>
            <Link to="/FacultyLogin">Faculty Login</Link>
            <a href="./DemoQuiz">Demo Quiz</a>
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
      <div className='row align-items-center"'>
      <div className='col-xs-6 col-sm-4 bg-info text-dark lh-lg'>
            <div><h2>About us</h2></div>
            <h3>
            In this E-Quiz application the test can be arranged in a different types based on the subjects 
	      the Resistered teacher/user can create a test of subject accordingly , 
            he can get the results of all students after test complete
	      the Registered student can access the test and can track his performance of test of all subjects shown by the chart 
            </h3>
      </div>
      <div className='col-xs-6 col-sm-4 bg-success text-dark lh-lg'>
            <div><h2>Faculty</h2></div>
            <h3>
           teacher/user can create a test of subject accordingly ,
            he can get the results of all students after test complete
            </h3>
      </div>
      <div className='col-xs-6 col-sm-4 bg-primary text-dark lh-lg'>
            <div><h2>Student</h2></div>
            <h3>
    The Registered student can access the test and can track 
    his performance of test of all subjects shown by the chart 
            </h3>
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