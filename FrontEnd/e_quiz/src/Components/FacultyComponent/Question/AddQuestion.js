
export default function AddQuestion()
{
       
      return(
        <>
        <div className="shadow-none p-3 mb-5 bg-info bg-gradient ">
        <section className="h-100 h-custom">
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
        <img src="https://www.datamaran.com/wp-content/uploads/2018/09/Quiz-How-well-do-you-know-the-ESG-regulatory-landscape.jpg"
        className="w-100" alt=""/>
      <div className="card-body p-4 p-md-5">
        <h2 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><b>Add a Question</b></h2>

        <form className="px-md-1">
    
        <div className="form-outline mb-4">
        <b>Faculty ID :</b> &emsp;<input type="number"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Quiz ID :</b> &emsp;<input type="number"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Question :</b> &emsp;<textarea type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Option1 :</b> &emsp;<textarea type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Option2 :</b> &emsp;<textarea type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Option3 :</b> &emsp;<textarea type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Option4 :</b> &emsp;<textarea type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Correct Answer :</b> &emsp;<input type="text"  className="form-control" />
        </div>
        <div className="form-outline mb-4">
        <b>Marks :</b> &emsp;<input type="number"  className="form-control" />
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-md-6 mb-4">
          <button type="submit" className="btn btn-success btn-lg mb-1">Add Question</button>
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
</>
)
      }