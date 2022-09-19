import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function StudentRegistration()
{

  let navigate = useNavigate();
  const[student ,setStudent] = useState({
        prnno:"",
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        mobileNo:"",
        gender:"",
        dateOfBirth:"",
        username:"",
        password:"",
  })

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const[repassword ,setRepassword]= useState("");

  function HandlePassword(e){ setRepassword(e.target.value) }

  const Registration= (e) =>{
    e.preventDefault();
    console.log("Something ...")
    axios.post("http://localhost:8080/student/inserts",  {
      prnno:student.prnno,
      firstName:student.firstName,
      middleName:student.middleName,
      lastName:student.lastName,
      email:student.email,
      mobileNo:student.mobileNo,
      gender:student.gender,
      dateOfBirth:student.dateOfBirth,
      username:student.username,
      password:student.password
    }    
    )
    .then((response)=>{
      console.log(response.data);
    }).then(()=>{
      alert("Registration Suceessfull");
      if(repassword === student.password)
      {
      navigate("/StudentLogin");
      }
      else
      {
        alert("Password Does't Match ...")
      }
      
  })
    .catch((e)=>
    {
      console.log(e)
      navigate("/StudentRegistration")
    })
  }

  //************************ Using Fetch ********************************** */
//   const StudData=
//   {
//     Prnno:student.prnNo,
//     Firstname:student.firstName,
//     Middlename:student.middleName,
//     Lastname:student.lastName,
//     Email:student.email,
//     Mobileno:student.mobileNo,
//     gender:student.gender,
//     DateOfBirth:student.dateOfBirth,
//     Username:student.username,
//     Password:student.password
//   }

//   fetch("http://localhost:8080/student/insert",
//   { 
//     method: 'POST',
//     headers:{'Content-Type':'application/json'}, 
//     body: JSON.stringify(StudData)} )

//   .then((response)=>{
//     console.log(response.data);
//     alert("Registration Sucessfull");
//     Navigate("/StudentLogin");
//   })
//   .catch((e)=>
//   {console.log(e)})
// }
  
      
          return(
            <div style={{backgroundImage:'url("https://c1.wallpaperflare.com/preview/250/615/762/all-black-black-business-desk.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <div className="shadow-none p-3 xl-5 ">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3 border border-dark">
            <img src="https://mds.healthcare/wp-content/uploads/2021/07/18-7-1.png"
            className="w-100" alt='...' />
            <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Student Registration Form</b></h2>
            <form className="px-md-1">
            <div className="form-outline mb-4">
            <input type="number"  className="form-control"name='prnno' onChange={HandleChange} />
            <label className="form-label"><b>Student PRN</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='firstName' onChange={HandleChange} />
            <label className="form-label"><b>First Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='middleName' onChange={HandleChange}  />
            <label className="form-label"><b>Middle Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='lastName' onChange={HandleChange}  />
            <label className="form-label"><b>Last Name :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='email' onChange={HandleChange} />
            <label className="form-label"><b>E-Mail :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="number"  className="form-control" name='mobileNo' onChange={HandleChange} />
            <label className="form-label"><b>Mobile Number :</b></label>
            </div>  
            <div className="row">
            <div className="col-md-6 mb-4">
            <b>Select Gender :</b> 
            <select className="select" name='gender' onChange={HandleChange}  >
            <option >Gender</option>
            <option value="Male" name="Male">Male</option>
            <option value="Female" name="Female">Female</option>
            <option value="Other" name="Other">Other</option>
            </select>
            </div>
            <div className="col-md-6 mb-4">
            <div className="form-outline datepicker">
            <input type="date" className="form-control" id="exampleDatepicker1" name='dateOfBirth' onChange={HandleChange}  />
            <label className="form-label"><b>Date Of Birth :</b></label>
            </div>
            </div>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='username' onChange={HandleChange}  />
            <label className="form-label"><b>UserName :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='password' onChange={HandleChange} />
            <label className="form-label"><b>Password :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='repassword' onChange={(e)=>HandlePassword(e)} />
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
            )
      }