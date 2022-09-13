import { Component } from "react";
import { Link } from "react-router-dom";
import './StudentDashboard.css';
export default class StudentDashboard extends Component
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
                  <h1>Student Dashboard</h1>
            </div>
       
            <div className="navbar">
                  <a href="./CreatePaper.html">Attempt Quiz</a>
                  <a href="./Updatepaper.html">View Results</a>
                  <a href="./DeletePaper.html">Give Feedback</a>
                  <a href="./Results.html">Performance Statastics</a>
                  <Link to="/Logout">LogOut</Link>


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