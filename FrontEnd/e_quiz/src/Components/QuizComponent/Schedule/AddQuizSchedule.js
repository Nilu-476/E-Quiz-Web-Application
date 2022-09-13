export default function AddQuizSchedule()
{
      return(
            < div className="border border-dark">
            <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://www.datamaran.com/wp-content/uploads/2018/09/Quiz-How-well-do-you-know-the-ESG-regulatory-landscape.jpg"
            className="w-100" alt="" />
          <div className="card-body p-4 p-md-5">
            <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Add Quiz Schedule</b></h2>

            <form className="px-md-1">
            
            <div className="form-outline mb-4">
                <input type="number"  className="form-control" />
                <label className="form-label"><b>Faculty ID :</b></label>
              </div>

              <div className="form-outline mb-4">
                <input type="text"  className="form-control" />
                <label className="form-label"><b>Quiz Topic :</b></label>
              </div>

              <div className="form-outline mb-4">
                  <textarea type="text" className="form-control"/>
                <label className="form-label"><b>Quiz Description :</b></label>
              </div>
              
              <div className="row">
              <div className="col-md-6 mb-4">
                <input type="date"  className="form-control" />
                <label className="form-label"><b>Schedule Date :</b></label>
              </div>

              <div className="col-md-6 mb-4">
                <input type="time"  className="form-control" />
                <label className="form-label"><b>Schedule Time :</b></label>
              </div>
              </div>

              <div className="form-outline mb-4">
                <input type="number"  className="form-control" />
                <label className="form-label"><b>Duration :</b></label>
              </div>

              <div className="row">
                  <div className="col-md-6 mb-4"> 
                  <button type="submit" className="btn btn-success btn-lg mb-1">Schedule Quiz</button>
                  </div>
                  <div className="col-md-6 mb-4"> 
                  <button type="submit" className="btn btn-danger btn-lg mb-1">Reset</button>
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