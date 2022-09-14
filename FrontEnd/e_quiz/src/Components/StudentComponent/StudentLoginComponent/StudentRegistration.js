import React from 'react';
import { Link } from 'react-router-dom';
export default function StudentRegistration()
{
      
          return(
            < div className="shadow-none p-3 mb-5 bg-info bg-gradient">
            <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://mds.healthcare/wp-content/uploads/2021/07/18-7-1.png"
            className="w-100"/>
          <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Student Registration Form</b></h2>

            <form className="px-md-1">
        
            <div className="form-outline mb-4">
                <input type="number"  className="form-control" />
                <label className="form-label"><b>Student PRN</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="text"  className="form-control" />
                <label className="form-label"><b>First Name :</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="text"  className="form-control" />
                <label className="form-label"><b>Middle Name :</b></label>
              </div>
              
              <div className="form-outline mb-4">
                <input type="text"  className="form-control" />
                <label className="form-label"><b>Middle Name :</b></label>
              </div>
              
              <div className="form-outline mb-4">
                <input type="email"  className="form-control" />
                <label className="form-label"><b>E-Mail :</b></label>
              </div>
              
              <div className="form-outline mb-4">
                <input type="number"  className="form-control" />
                <label className="form-label"><b>Mobile Number :</b></label>
              </div>
              

              <div className="row">
              <div className="col-md-6 mb-4">
                  <b>Select Gender :</b> 
                  <select className="select">
                    <option value="1" disabled>Gender</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                    <option value="4">Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline datepicker">
                    <input type="date" className="form-control" id="exampleDatepicker1" />
                    <label for="exampleDatepicker1" className="form-label"><b>Date Of Birth :</b></label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="text"  className="form-control" />
                <label className="form-label"><b>UserName :</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="password"  className="form-control" />
                <label className="form-label"><b>Password :</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="password"  className="form-control" />
                <label className="form-label"><b>ReEnter Password :</b></label>
              </div>
              
              <div className="row">
                    <div className="col-md-4 mb-4">
                    <button type="submit" className="btn btn-success btn-lg mb-1">Create</button>
                    </div>
                    <div className="col-md-4 mb-4">
                    <button type="reset" className="btn btn-danger btn-lg mb-1">Reset</button>
                    </div>
                    <div className="col-md-4 mb-4">
                      <Link to="/" className="btn btn-info btn-lg mb-1">Home</Link>
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