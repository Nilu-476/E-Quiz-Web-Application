import { Component } from "react";
import { Link } from "react-router-dom";
import './FacultyDashboard.css';
export default class FacultyDashboard extends Component
{
      
      render()
      {
            function openNav()
            {
                  document.getElementById("mySidenav").style.width = "320px";
            }

            /* Set the width of the side navigation to 0 */
            function closeNav() 
            {
                  document.getElementById("mySidenav").style.width = "0";
            }

            return(
                  <>
                  <body className="main">

            <div className="header">
                  <h1>Faculty Dashboard</h1>
            </div>
       
            <div className="navbar">
                  <Link to="/AddQuestion">Create Paper</Link>
                  <Link to="/UpdateQuestion">Update Paper</Link>
                  <a href="./DeletePaper.html">Delete Paper</a>
                  <a href="./Results.html">Results</a>
                  <Link to="/" >Home</Link>
                  <Link to="/Logout">LogOut</Link>
                  <div className="dropdown">
                        <button className="dropbtn">Shedule a Quiz
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                              <Link to="/AddQuizSchedule">Add Quiz Schedule</Link>
                          <a href="./sss">Show Quiz Schedule</a>
                          <a href="./sss">Update Quiz Schedule</a>
                          <a href="./sss">Delete Quiz Schedule</a>
                        </div>
                  </div>
                  <div className="navbar">
                        <div >
                              <a className="rows" href="./sss" onClick={openNav}><b>&#9776;&emsp;Menu</b> </a>
                              <br/>
                        </div>
                  </div>
                  </div>                  
          
            <div id="mySidenav" className="sidenav">
                  <a href="../Homepage.html"><i className="fa fa-fw fa-home"></i> Home</a>
                  <a href="./services"><i className="fa fa-fw fa-wrench"></i> Services</a>
                  <a href="./clients"><i className="fa fa-fw fa-user"></i> Profile</a>   
                  <a href="./contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                  <a href="./javascript" className="closebtn" onClick={closeNav}>&times;</a>
                </div>  
                   
</body>
                  </>
            )
      }
}