import { Component } from "react";
export default class StudentLogin extends Component
{
      componentDidMount()
      {

      }

      render()
      {
            return(
                  < div className="shadow-none p-3 mb-5 bg-info bg-gradient">
                  <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-4">
                <img src="https://thumbs.dreamstime.com/b/user-login-digital-screen-digitally-generated-43652194.jpg"
                  className="w-80"alt="" />
                <div className="card-body p-4 p-md-8">
                  <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Student Login</b></h2>
      
                  <form className="px-md-1">
                  
                  <div className="form-outline mb-4">
                      <input type="number"  className="form-control" />
                      <label className="form-label"><b>Username :</b></label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="number"  className="form-control" />
                      <label className="form-label"><b>Password :</b></label>
                    </div>
                    
      
                    <div className="row">
                        <div className="col-md-6 mb-4"> 
                        <button type="submit" className="btn btn-success btn-lg mb-2">Login</button>
                        </div>
                        <div className="col-md-6 mb-4"> 
                        <button type="reset" className="btn btn-danger btn-lg mb-1">Reset</button>
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
}