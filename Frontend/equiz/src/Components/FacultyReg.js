import React, { useState } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput
}
    from 'mdb-react-ui-kit';
import Header from './Header';

export default function FacultyReg() {

    const [regestration, setRegestration] = useState({
        fname: "",
        mname: "",
        lname: "",
        mail: "",
        mobile: "",
        dob: "",
        gender: "male",
        uname: "",
        password: "",
        code: ""
    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegestration({ ...regestration, [name]: value });
    };

    const fun = (e) => {
        e.preventDefault();
        console.log("clicked")

        axios
            .post("http://localhost:8080/faculty/addfaculty/"+regestration.code, {

                firstName: regestration.fname,
                middleName: regestration.mname,
                lastName: regestration.lname,
                email: regestration.mail,
                mobileNo: regestration.mobile,
                gender: regestration.gender,
                dateOfBirth: regestration.dob,
                userName: regestration.uname,
                password: regestration.password

            })
            .then((response) => {
                console.log(response.data);
                setRegestration({
                    fname: "",
                    mname: "",
                    lname: "",
                    mail: "",
                    mobile: "",
                    dob: "",
                    gender: "",
                    uname: "",
                    password: "",
                    code: ""
                });
                alert("Registration Successfull");
                
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
                    <h2 className="text-uppercase text-center mb-5">Faculty Registration</h2>
                    <MDBInput wrapperClass='mb-4' label='College Code' size='lg' name='code' value={regestration.code} type='number' onChange={handleChange} required/>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' name='fname' value={regestration.fname} type='text' onChange={handleChange} required/>
                    <MDBInput wrapperClass='mb-4' label='Middle Name' size='lg' name='mname' value={regestration.mname} type='text' onChange={handleChange}/>
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' name='lname' value={regestration.lname} type='text' onChange={handleChange} required/>
                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='mail' value={regestration.mail} type='email' onChange={handleChange} required/>
                    <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' name='mobile' value={regestration.mobile} type='number' onChange={handleChange} min='1000000000' max='9999999999' required/>
                    <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='lg' name='dob' value={regestration.dob} type='date' onChange={handleChange} required/>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={handleChange} />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={handleChange} />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="other" value="Other" onClick={handleChange} />
                        <label class="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                    <MDBInput wrapperClass='mb-4' label='Username' size='lg' name='uname' value={regestration.uname} type='text' onChange={handleChange} required/>
                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' value={regestration.password} type='password' onChange={handleChange} required/>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={fun}>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </>
    );
}

