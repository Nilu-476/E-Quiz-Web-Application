import { Link, useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import FacultyDashboard from '../Dashboard/FacultyDashboard';

export default function FacultyLogin()
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
   axios.post(`http://localhost:8080/faculty/facultylogin/${uname}/${password}`,uname,password)
  .then((result)=>
  {
     console.log(result);
     if(result.data !== "")
     {
        alert('Login SuceessFull');
        sessionStorage.setItem('faculty',JSON.stringify(result.data));
     }
     else{
      alert('Invalid Login');
      navigate("/FacultyLogin");
     }
   }).then(
      navigate("/FacultyDashboard")

   ).catch(error=>{
    console.log(error); 
   })   //catch block ends
  
   
  } //handle api ends

  <BrowserRouter>
  <Routes>
    <Route path="/FacultyDashboard" element={<FacultyDashboard/>}></Route>
    <Route path="/FacultyLogin" element={<FacultyLogin/>}></Route>
  </Routes>
  </BrowserRouter>

      
          return(
            <>
            <div style={{backgroundImage:'url("https://c0.wallpaperflare.com/preview/335/160/43/background-beverage-coffee-compose.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            < div className="shadow-none p-3 xl-5 ">
            <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg- col-xl-6">
        <div className="card rounded-4 border border-dark">
          <img src="https://thumbs.dreamstime.com/b/user-login-digital-screen-digitally-generated-43652194.jpg"
            className="w-80"alt="" />
          <div className="card-body p-4 p-md-8">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Faculty Login</b></h2>

            <form className="px-md-1">
            
            <div className="form-outline mb-4">
                <input value={uname} type="text" onChange={handleUname} className="form-control" />
                <label className="form-label"><b>Username :</b></label>
              </div>
              <div className="form-outline mb-4">
                <input value={password} type="password" onChange={handlePassword} className="form-control" />
                <label className="form-label"><b>Password :</b></label>
              </div>
              

              <div className="row">
                  <div className="col-md-4 mb-4"> 
                  <button value={uname} onClick={handleApi} type="submit" className="btn btn-success btn-mb mb-1">Login</button>
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
      </>

          )
  }
