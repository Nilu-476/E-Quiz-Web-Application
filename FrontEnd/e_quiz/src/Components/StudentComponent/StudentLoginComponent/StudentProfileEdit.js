import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentProfileEdit()
{
      const data=sessionStorage.getItem('student');
      const {prnno,firstName , middleName , lastName ,email , mobileNo , gender, dateOfBirth, username,password}=JSON.parse(data);

      let navigate = useNavigate();
      const[student ,setStudent] = useState({
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
    
      const ProfileEdit= (e) =>{
        e.preventDefault();
        console.log("Something ...")
        axios.post("http://localhost:8080/student/editstudentprofile",  {
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
          alert("Profile Updated Suceessfully");
          navigate("/StudentDashboard");
      })
        .catch((e)=>
        {
          console.log(e)
          alert("Please Enter Correct Password ...");
        })
      }
            
          return(
            <div className="shadow-none p-3 xl-5 bg-info bg-gradient">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
            <img src="https://t4.ftcdn.net/jpg/04/07/01/73/360_F_407017362_lBJsGPIUkKSGTSvUIGBhYEh5SW1hFsxr.jpg"
            className="w-100" alt='...' />
            <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Edit your Profile</b></h2>
            <form className="px-md-1">
            <div className="form-outline mb-4">
            <input type="number"  className="form-control" name='prnno' value={prnno} preventDefault />
            <label className="form-label"><b>Student PRN</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='firstName' placeholder={firstName} onChange={HandleChange} />
            <label className="form-label"><b>First Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='middleName' placeholder={middleName} onChange={HandleChange}  />
            <label className="form-label"><b>Middle Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='lastName' placeholder={lastName} onChange={HandleChange}  />
            <label className="form-label"><b>Last Name :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='email' placeholder={email} onChange={HandleChange} />
            <label className="form-label"><b>E-Mail :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="number"  className="form-control" name='mobileNo' placeholder={mobileNo} onChange={HandleChange} />
            <label className="form-label" placeholder={mobileNo}><b>Mobile Number :</b></label>
            </div>  
            <div className="row">
            <div className="col-md-6 mb-4">
            <b>Select Gender :</b> 
            <select className="select" name='gender' placeholder={gender} onChange={HandleChange}  >
            <option >Gender</option>
            <option value="Male" name="Male">Male</option>
            <option value="Female" name="Female">Female</option>
            <option value="Other" name="Other">Other</option>
            </select>
            </div>
            <div className="col-md-6 mb-4">
            <div className="form-outline datepicker">
            <input type="date" className="form-control" name='dateOfBirth' placeholder={dateOfBirth} onChange={HandleChange}  />
            <label className="form-label"><b>Date Of Birth :</b></label>
            </div>
            </div>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='username' placeholder={username} onChange={HandleChange}  />
            <label className="form-label"><b>UserName :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='password'placeholder={password} onChange={HandleChange} />
            <label className="form-label"><b>Password :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='repassword' onChange={(e)=>HandlePassword(e)} />
            <label className="form-label"><b>ReEnter Password :</b></label>
            </div>  
            <div className="row">
              <div className="col-md-4 mb-4">
                <button type="submit" className="btn btn-success btn-mb mb-1" onClick={ProfileEdit}>Save</button>
                  </div>
                  <div className="col-md-4 mb-4">
                  <button type="reset" className="btn btn-danger btn-mb mb-1">Reset</button>
                  </div>
                  <div className="col-md-4 mb-4">
                  <Link to="/StudentDashboard" className="btn btn-info btn-mb mb-1">Back</Link>
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
      )
}