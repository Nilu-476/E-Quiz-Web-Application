
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
export default function FacultyLogin()
{
      
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
      console.log({email,password})
     const handleEmail=(e)=>{
        setEmail(e.target.value)
     }
      
     const handlePassword=(e)=>{
        setPassword(e.target.value)
     }
     
     const handleApi=()=>{
      setPassword({email,password})
      axios.post('https://reqres.in/api/login',{
       email:email,
       password:password
      })
       .then(result=>{console.log(result)})
      .catch(error=>{
        console.log(error)
      })
      
      
   }
      
          return(
            <>
            < div className="shadow-none p-3 xl-5 bg-info bg-gradient">
            <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-4">
          <img src="https://thumbs.dreamstime.com/b/user-login-digital-screen-digitally-generated-43652194.jpg"
            className="w-80"alt="" />
          <div className="card-body p-4 p-md-8">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Faculty Login</b></h2>

            <form className="px-md-1">
            
            <div className="form-outline mb-4">
                <input value={email} onChange={handleEmail} type="email"  className="form-control" />
                <label className="form-label"><b>Email :</b></label>
              </div>
              <div className="form-outline mb-4">
                <input value={password} onChange={handlePassword} type="password"  className="form-control" />
                <label className="form-label"><b>Password :</b></label>
              </div>
              

              <div className="row">
                  <div className="col-md-4 mb-4"> 
                  <button onClick={handleApi} type="submit" className="btn btn-success btn-mb mb-1">Login</button>
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
      </>

          )
      
}
