import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FacultyProfileEdit()
{
    const data=sessionStorage.getItem('faculty');
      const {facultyId,firstName , middleName , lastName ,email , mobileNo , gender, dateOfBirth, userName,password}=JSON.parse(data);

      console.log(facultyId,firstName , middleName , lastName ,email , mobileNo , gender, dateOfBirth, userName,password);
      let navigate = useNavigate();
      const[faculty ,setFaculty] = useState({
            fName:"",
            mName:"",
            lName:"",
            Email:"",
            MobileNo:"",
            Gender:"",
            DateOfBirth:"",
            Username:"",
            Password:"",
      })
    
      const HandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFaculty({ ...faculty, [name]: value });
      };
    
      const[repassword ,setRepassword]= useState("");
    
      function HandlePassword(e){ setRepassword(e.target.value) }

      console.log(facultyId);
    
      const ProfileEdit= (e) =>{
        e.preventDefault();
        console.log("Something ...")
        axios.post(`http://localhost:8080/faculty/editfacultyprofile/${facultyId}`,
          {
          firstName:faculty.fName,
          middleName:faculty.mName,
          lastName:faculty.lName,
          email:faculty.Email,
          mobileNo:faculty.MobileNo,
          gender:faculty.Gender,
          dateOfBirth:faculty.DateOfBirth,
          userName:faculty.Username,
          password:faculty.Password
        }    
        )
        .then((response)=>{
          console.log(response.data);
        }).then(()=>{
          alert("Profile Updated Suceessfully");
          navigate("/FacultyDashboard");
      })
        .catch((e)=>
        {
          console.log(e)
          alert("Please Enter Correct Password ...");
        })
      }

    return(
        <>
        <div style={{backgroundImage:'url("https://i.pinimg.com/564x/6b/8e/97/6b8e974572105a1e4096c1a8e2b6a7bc.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover" }}>
            <div className="shadow-none p-3 xl-5 ">
            <section className="h-100 h-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3 border border-dark">
            <br/><br/>
            <img src="https://www.shareicon.net/data/2016/06/30/788856_edit_512x512.png" style={{alignSelf:'center'}}
            className="w-50" alt='...' />
            <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Faculty Profile Details</b></h2>
            <form className="px-md-1">
            <div className="form-outline mb-4">
            <input type="number"  className="form-control" value={facultyId} preventDefault />
            <label className="form-label"><b>Faculty ID :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='fName' placeholder={firstName} onChange={HandleChange} />
            <label className="form-label"><b>First Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='mName' placeholder={middleName} onChange={HandleChange}  />
            <label className="form-label"><b>Middle Name :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='lName' placeholder={lastName} onChange={HandleChange}  />
            <label className="form-label"><b>Last Name :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='Email' placeholder={email} onChange={HandleChange} />
            <label className="form-label"><b>E-Mail :</b></label>
            </div>  
            <div className="form-outline mb-4">
            <input type="number"  className="form-control" name='MobileNo' placeholder={mobileNo} onChange={HandleChange} />
            <label className="form-label" placeholder={mobileNo}><b>Mobile Number :</b></label>
            </div>  
            <div className="row">
            <div className="col-md-6 mb-4">
            <b>Select Gender :</b> 
            <select className="select" name='Gender' placeholder={gender} onChange={HandleChange}  >
            <option >Gender</option>
            <option value="Male" name="Male">Male</option>
            <option value="Female" name="Female">Female</option>
            <option value="Other" name="Other">Other</option>
            </select>
            </div>
            <div className="col-md-6 mb-4">
            <div className="form-outline datepicker">
            <input type="date" className="form-control" name='DateOfBirth' placeholder={dateOfBirth} onChange={HandleChange}  />
            <label className="form-label"><b>Date Of Birth :</b></label>
            </div>
            </div>
            </div>
            <div className="form-outline mb-4">
            <input type="text"  className="form-control" name='Username' placeholder={userName} onChange={HandleChange}  />
            <label className="form-label"><b>UserName :</b></label>
            </div>
            <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='Password'placeholder={password} onChange={HandleChange} />
            <label className="form-label"><b>Password :</b></label>
            </div>
            {/* <div className="form-outline mb-4">
            <input type="password"  className="form-control" name='repassword' onChange={(e)=>HandlePassword(e)} />
            <label className="form-label"><b>ReEnter Password :</b></label>
            </div>   */}
            <div className="row">
              <div className="col-md-4 mb-4">
                <button type="submit" className="btn btn-success btn-mb mb-1" onClick={ProfileEdit}>Save</button>
                  </div>
                  <div className="col-md-4 mb-4">
                  <button type="reset" className="btn btn-danger btn-mb mb-1">Reset</button>
                  </div>
                  <div className="col-md-4 mb-4">
                  <Link to="/FacultyDashboard" className="btn btn-info btn-mb mb-1">Back</Link>
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