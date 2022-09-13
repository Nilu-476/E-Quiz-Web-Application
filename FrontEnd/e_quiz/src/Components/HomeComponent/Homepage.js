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
      <h3>
      <p className="main">
                        In this E-Quiz application the test can be arranged in a different types based on the subjects 
	the Resistered teacher/user can create a test of subject accordingly , he can get the results of all students after test complete
	the Registered student can access the test and can track his performance of test of all subjects shown by the chart 
      </p></h3>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="footer">
            <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
      </div>      
</body>
            )
      }