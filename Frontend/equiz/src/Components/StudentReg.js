import React,{useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput
}
from 'mdb-react-ui-kit';
import axios from "axios";
import Header from './Header';


export default function StudentReg() {

    const [prn, setPrn] = useState();
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState();
    const [gender, setGender] = useState("Male");
    const [dob, setDob] = useState("");
    const [uname, setUname] = useState("");
    const [passward, setPassward] = useState("");

    const fun = (e) => {
        e.preventDefault();
       console.log("clicked")
       
       axios
       .post("http://localhost:8080/student/inserts", {
        
        prnNo : prn,
        firstName : fname,
        middleName : mname,
        lastName : lname,
        email : email,
        mobileNo : mobile,
        gender : gender,
        dateOfBirth : dob,
        username : uname,
        password : passward
        
       })
       .then((response) => {
         console.log(response.data);
         alert("Registration Successfull");
         setPrn("");
         setFname("");
         setMname("");
         setLname("");
         setEmail("");
         setMobile("");
         setGender("");
         setDob("");
         setUname("");
         setPassward("");
       })
       .catch((error) => {
        alert("Registration Failed");
       });
      }

    return (
        <>
        <Header></Header>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://media.istockphoto.com/photos/businessman-using-a-computer-to-concept-of-fund-financial-investment-picture-id1360521209?b=1&k=20&m=1360521209&s=170667a&w=0&h=GcwijqRDOroH5-hQdZ--ksLgOjCMuq1kqZRP30kSZKA=)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Student Registration</h2>
                    <MDBInput wrapperClass='mb-4' label='PRN' size='lg' id='prn' type='number' value={prn} onChange={(e)=>{setPrn(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='fname' type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4' label='Middle Name' size='lg' id='mname' type='text' value={mname} onChange={(e)=>{setMname(e.target.value)}} />
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lname' type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='mail' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='mobile' type='number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required min='1000000000' max='9999999999'/>
                    <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='lg' id='dob' type='date' value={dob} onChange={(e)=>{setDob(e.target.value)}} required/>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={(e)=>{setGender(e.target.value)}}/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={(e)=>{setGender(e.target.value)}}/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="other" value="Other" onClick={(e)=>{setGender(e.target.value)}}/>
                        <label class="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                    <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='uname' type='text' value={uname} onChange={(e)=>{setUname(e.target.value)}} required/>
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='pwd' type='password' value={passward} onChange={(e)=>{setPassward(e.target.value)}} required/>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={fun}>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </>
    );
}

