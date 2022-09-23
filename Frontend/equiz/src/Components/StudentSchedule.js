import React,{useEffect,useState} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from './Header';
import axios from 'axios';


export default function StudentSchedule() {

  const uname = sessionStorage.getItem("authenticatedUser");
    const [quiz, setQuiz] = useState([{
        quizid: '',
        quizName: '',
        quizDesc: '',
        scheduleDate: '',
        scheduleTime: '',
        duration: ''
    }]);

    const [attemp, setAttempt] = useState([])

    useEffect( () => {
       getSche();
      }, []);

      const getSche = ()=>{
        axios.get("http://localhost:8080/quizscheule/getschedulebydate",{}).
        then((response)=>{
            console.log(response.data);
          setQuiz(response.data);
        }).catch((e)=>{
          console.log(e);
        })

        axios.get("http://localhost:8080/result/attemptinfo/"+uname,{}).
        then((response)=>{
            console.log(response.data);
            setAttempt(response.data);
        }).catch((e)=>{
          console.log(e);
        })
      }

      const attemptQuiz = (id,time)=>{
        window.location = `/instrunction/${id}/${time}`;
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
          <th scope='col'>Attempt</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {quiz.map((q,id) =>{
        
       return(<tr key={id}>
          <td>
            <div className='d-flex align-items-center' style={{backgroundColor:'white'}}>
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
          { attemp.includes(q.quizid) ? <td>
          <p className='fw-normal mb-1'>Attemped</p>
          </td>:
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{attemptQuiz(q.quizid,q.duration)}}>
              Attempt
            </MDBBtn>
          </td>}
         
        </tr>)})}
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
}