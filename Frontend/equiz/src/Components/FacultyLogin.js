import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import AuthenticateService from './AuthenticateService';
import Header from './Header';

export default function FacultyLogin() {

  var [login, setLogin] = useState({ uname: '', password: '' });

  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setLogin({ ...login, [name]: value, });
  };

  var onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/faculty/facultylogin/"+login.uname+"/"+login.password, {})
      .then((response) => {
        console.log(response.data);

        if (response.data === "pass") {

          AuthenticateService.facultyLogin(login.uname);

          setLogin({ uname: '', password: '' });
          window.location = `/faculty-dash`;

        }
        else {
          console.log(login.user_name);
          alert("Invalid Password/Username");

        }

      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <>
    <Header></Header>
    <MDBContainer>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{backgroundColor:'white'}}>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Faculty Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' name='uname' type='text' size="lg" onChange={handleChange} required/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' name='password' type='password' size="lg" onChange={handleChange} required/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={onSubmit}>
                Login
              </MDBBtn>

              <div>
                <p className="mb-0">Don't have an account? <a href="faculty-reg" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
}
