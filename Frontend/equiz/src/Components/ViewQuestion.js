import React,{useEffect,useState} from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ViewQuestion() {
    const {quizid} = useParams();
    const [quiz, setQuiz] = useState([{
        questionId: '',
        questionText: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer:'',
        marks: ''
    }]);

    useEffect( () => {
        getAllQue();
      }, []);

      const getAllQue = () => {
        axios.get("http://localhost:8080/managequestion/getallquestion/"+quizid,{}).
        then((response)=>{
          setQuiz(response.data);
        }).catch((e)=>{
          console.log(e);
        })
      }

      const editQue = (id)=>{
        window.location = `/edit-que/${id}/${quizid}`
        
      }

      const deleteQue = (id)=>{
        axios.post("http://localhost:8080/managequestion/deletequestion/"+id,{}).
        then((response)=>{
          alert(response.data);
        }).catch((e)=>{
          console.log(e);
        })
        getAllQue();
      }
   
  return (
    <>
    <Header></Header>
    <div style={{backgroundColor:'white'}}>
    <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Questions</h3>
    <MDBTable align='middle' style={{backgroundColor:'white'}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>Question</th>
          <th scope='col'>Option1</th>
          <th scope='col'>Option2</th>
          <th scope='col'>Option3</th>
          <th scope='col'>Option4</th>
          <th scope='col'>Answer</th>
          <th scope='col'>Marks</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {quiz.map((q) =>{
        
       return(
       <tr>
          <td>
                <p className='fw-bold mb-1'>{q.questionText}</p>
          </td>
          <td>
            <p className='fw-normal mb-1'>{q.option1}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.option2}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.option3}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.option4}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.correctAnswer}</p>
          </td>
          <td>
          <p className='fw-normal mb-1'>{q.marks}</p>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{editQue(q.questionId)}}>
              Edit
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='blue' rounded size='sm' onClick={()=>{deleteQue(q.questionId)}}>
              Delete
            </MDBBtn>
          </td>
          
        </tr>)})}
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
}