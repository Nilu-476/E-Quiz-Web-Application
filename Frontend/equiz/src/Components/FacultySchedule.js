import React,{useEffect,useState} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from './Header';
import axios from 'axios';


export default function FacultySchedule() {

    const [quiz, setQuiz] = useState([{
        quizid: '',
        quizName: '',
        quizDesc: '',
        scheduleDate: '',
        scheduleTime: '',
        duration: ''
    }]);

    useEffect( () => {
       getSche();
      }, []);

      const getSche = ()=>{
        axios.get("http://localhost:8080/quizscheule/viewschedule/"+sessionStorage.getItem("authenticatedUser"),{}).
        then((response)=>{
          setQuiz(response.data);
        }).catch((e)=>{
          console.log(e);
        })
      }

      const addQueLink = (id)=>{
        window.location = `/add-question/${id}`;
      }

      const editSche = (id)=>{
        window.location = `/edit-sche/${id}`;
      }

      const viewQueLink = (id)=>{
        window.location = `/view-que/${id}`;
      }

      const viewResults = (id)=>{
        window.location = `/view-result/${id}`;
      }

      const deleteSche = (id) => {
        axios.post("http://localhost:8080/quizscheule/deleteschedule/"+id,{}).
        then((response)=>{
          alert(response.data);
        }).catch((e)=>{
          console.log(e);
        })
        getSche();
      } 
   
  return (
    <>
    <Header></Header>
    <div style={{backgroundColor:'white'}}>
    <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Quiz Schedule</h3>
    <MDBTable align='middle' style={{backgroundColor:'white'}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Description</th>
          <th scope='col'>Date</th>
          <th scope='col'>Duration</th>
          <th scope='col'>Update</th>
          <th scope='col'>Delete</th>
          <th scope='col'>Add Questions</th>
          <th scope='col'>View Questions</th>
          <th scope='col'>View Results</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {quiz.map((q) =>{
        
       return(<tr>
          <td>
            <div className='d-flex align-items-center'>
              
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{q.quizName}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{q.quizDesc}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.scheduleDate}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.duration}</p>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{editSche(q.quizid)}}>
              Edit
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{deleteSche(q.quizid)}}>
              Delete
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{addQueLink(q.quizid)}}>
              Add Questions
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{viewQueLink(q.quizid)}}>
              View Questions
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{viewResults(q.quizid)}}>
              View Results
            </MDBBtn>
          </td>
        </tr>)})}
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
}