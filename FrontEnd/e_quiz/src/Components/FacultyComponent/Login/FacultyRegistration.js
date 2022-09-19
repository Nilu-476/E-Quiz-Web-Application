import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
export default function FacultyRegistration()
{
  let navigate=useNavigate();
  const[faculty,setFaculty]=useState({
    facultyid:"",
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    mobileNo:"",
    gender:"",
    dateOfBirth:"",
    userName:"",
    password:""
  })

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFaculty({ ...faculty, [name]: value });
  };

  const[repassword, setRepassword]=useState('');

  function HandlePassword(e){ setRepassword(e.target.value) }

  const Registration= (e) =>{
    e.preventDefault();
    console.log("Something ...")
    axios.post(`http://localhost:8080/faculty/addfaculty/7834562`,  {
      prnno:faculty.prnno,
      firstName:faculty.firstName,
      middleName:faculty.middleName,
      lastName:faculty.lastName,
      email:faculty.email,
      mobileNo:faculty.mobileNo,
      gender:faculty.gender,
      dateOfBirth:faculty.dateOfBirth,
      userName:faculty.userName,
      password:faculty.password
    }    
    )
    .then((response)=>{
      console.log(response.data);
    }).then(()=>{
      alert("Registration Suceessfull");
      if(repassword === faculty.password)
      {
      navigate("/FacultyLogin");
      }
      else
      {
        alert("Password Does't Match ...")
      }
      
  })
    .catch((e)=>
    {
      console.log(e)
      navigate("/FacultyRegistration")
    })
  }

            return(
              <>
              <div style={{backgroundImage:'url("https://c1.wallpaperflare.com/preview/250/615/762/all-black-black-business-desk.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
                  < div className="shadow-none p-3 xl-5">
                  <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3 border border-dark">
                <img src="https://mds.healthcare/wp-content/uploads/2021/07/18-7-1.png"
                  className="w-100" alt=""/>
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Faculty Registration Form</b></h2>
      
                  <form className="px-md-1">
              
                  <div className="form-outline mb-4">
                      <input type="number" name="facultyid" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>Faculty ID :</b></label>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input type="text" name="firstName" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>First Name :</b></label>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input type="text" name="middleName" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>Middle Name :</b></label>
                    </div>
                    
                    <div className="form-outline mb-4">
                      <input type="text" name="lastName" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>Last Name :</b></label>
                    </div>
                    
                    <div className="form-outline mb-4">
                      <input type="email" name="email" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>E-Mail :</b></label>
                    </div>
                    
                    <div className="form-outline mb-4">
                      <input type="number" name="mobileNo" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>Mobile Number :</b></label>
                    </div>
                    
      
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <b>Select Gender :</b> 
                        <select className="select" name="gender" onChange={HandleChange}>
                          <option >Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <input type="date" className="form-control" name="dateOfBirth" id="exampleDatepicker1" onChange={HandleChange} />
                          <label for="exampleDatepicker1" className="form-label"><b>Date Of Birth :</b></label>
                        </div>
                      </div>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input type="text" name="userName" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>UserName :</b></label>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input type="password" name="password" className="form-control" onChange={HandleChange} />
                      <label className="form-label"><b>Password :</b></label>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input type="password" name="repassword" className="form-control" onChange={(e)=>HandlePassword(e)}/>
                      <label className="form-label"><b>ReEnter Password :</b></label>
                    </div>
                    <div className="row">
                    <div className="col-md-4 mb-4">
                    <button type="submit" className="btn btn-success btn-mb mb-1" onClick={Registration}>Create</button>
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