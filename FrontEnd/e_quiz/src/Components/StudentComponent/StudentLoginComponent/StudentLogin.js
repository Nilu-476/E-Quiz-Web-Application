import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import StudentDashboard from '../Dashboard/StudentDashboard';
export default function StudentLogin()
{
  let navigate= useNavigate();
  const [uname,setUname]=useState('')
  const [password,setPassword]=useState('')
  
  const handleUname=(e)=>{
     setUname(e.target.value)
     
  }
   
  const handlePassword=(e)=>{
     setPassword(e.target.value)
     
  }
  
  const handleApi=()=>{
   setPassword({uname,password})
   axios.post(`http://localhost:8080/student/studentlogin/${uname}/${password}` , uname , password
 ).then((result)=>
  {
    console.log(result);
    if(result.data !== "")
     {
      alert('Login Successfull');
      sessionStorage.setItem('student',JSON.stringify(result.data));
      
     }
     else
     {
      alert('Inavlid Login');
      navigate("/StudentLogin")

     }
   }).then(navigate("/StudentDashboard"))
   .catch(error=>{
     console.log(error);
     
   })
  }  

  <BrowserRouter>
  <Routes>
    <Route path="/StudentDashboard" element={<StudentDashboard/>}></Route>
  </Routes>
  </BrowserRouter>

  return(
        <div style={{backgroundImage:'url("https://c0.wallpaperflare.com/preview/335/160/43/background-beverage-coffee-compose.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
        <div className="p-3 xl-5 ">
        <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6 ">
              <div className="card rounded-4 border border-dark">
                <img src="https://thumbs.dreamstime.com/b/user-login-digital-screen-digitally-generated-43652194.jpg"
                  className="w-80"alt="" />
                <div className="card-body p-4 p-md-8">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Student Login</b></h2>
      
                  <form className="px-md-1">
                  <div className="form-outline mb-4">
                      <input type="text" name="uname" className="form-control"  onChange={handleUname} />
                      <label className="form-label"><b>Username :</b></label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" name="password" className="form-control"  onChange={handlePassword}/>
                      <label className="form-label"><b>Password :</b></label>
                    </div>
                    
      
                    <div className="row">
                        <div className="col-md-4 mb-4"> 
                        <button type="submit" className="btn btn-success btn-mb mb-1" onClick={handleApi}>Login</button>
                        </div>
                        <div className="col-md-4 mb-4"> 
                        <button type="reset" className="btn btn-danger btn-mb mb-1">Reset</button>
                        </div>
                        <div className="col-md-4 mb-4">
                      <Link to="/" className="btn btn-info btn-mb mb-1">Home</Link>
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
            </div>
            )
      }