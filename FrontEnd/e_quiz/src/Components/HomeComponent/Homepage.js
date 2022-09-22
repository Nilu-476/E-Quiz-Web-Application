import { Link, NavLink } from 'react-router-dom';
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
      <div className="navbar navbar-brand sticky-top class   ">
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
<div className="contactus " style={{textAlign:'justify'}}>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      

      <table className="border box text-justify border border-0 bg-transparent text-warning col-xl-6" style={{alignItems:'left'}}>
      <thead className="bg-dark  border border-warning  text-warning col-xl-6" style={{fontSize:"25px"}}>
      <tr>
      <th colSpan={3} style={{textAlign:'center'}}><h1>Contact Us</h1></th>
    </tr>
  </thead>
  <tbody style={{fontSize:"25px"}}>
      <tr>
      <td>
          <div className="ms-3 fw-bolder" >Nilima Panasare
            </div>
      </td>
      <td>
          <div className="fw-bolder" >
           &emsp;9898989898
          </div>
      </td>
      <td>
      <div className="fw-bolder">
      &emsp;nilimapansare@gmail.com
          </div>
      </td>
    </tr>
    <tr>
    <td>
          <div className="fw-bolder" >&emsp;Bhartesh Girmal
            </div>
      </td>
      <td>
          <div className="fw-bolder">
          &emsp;9503042573
          </div>
      </td>
      <td>
      <div className="fw-bolder">
      &emsp;bharteshgirmal@gmail.com
          </div>
      </td>
    </tr>
    <tr>
    <td>
          <div className="fw-bolder">&emsp;Hardik Parab
            </div>
      </td>
      <td>
          <div className="fw-bolder" >
          &emsp;9924181577
          </div>
      </td>
      <td>
      <div className="fw-bolder" >
      &emsp;hardikparab@gmail.com
          </div>
      </td>
    </tr>
    <tr >
    <td>
          <div className="fw-bolder" >&emsp;Shhubham Sharma
            </div>
      </td>
      <td>
          <div className="fw-bolder" >
          &emsp;9767433606
          </div>
      </td>
      <td >
      <div className="fw-bolder">
      &emsp;shubhamsharma@gmail.com
          </div>
      </td>
    </tr>
    <tr>
    <td>
          <div className="fw-bolder" >Rushikesh Petkar
            </div>
      </td>
      <td>
          <div className="fw-bolder" >
          &emsp;9527249446
          </div>
      </td>
      <td>
      <div className="fw-bolder">
      &emsp;rushikeskpetkar@gmail.com
          </div>
      </td>
    </tr>
  </tbody>
</table>  
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
</div>
</div> 
      <div className="footer main">
            <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
      </div>      
</body>
</>
            )
      }