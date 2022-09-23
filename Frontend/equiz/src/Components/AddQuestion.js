import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBTable,
  MDBTableHead,
  MDBTableBody
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from './Header';

export default function AddQuestion() {

  const [que, setQue] = useState({ question: '',
  op1: '',op2: '',op3: '', op4: '',ans:'', marks: 1});

  const [questions, setQuestions] = useState([])
  
  const { quizid } = useParams();
  const uname = sessionStorage.getItem('authenticatedUser');

  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setQue({ ...que, [name]: value, });
  };

  

  const hanldeAdd = (e)=>{
    e.preventDefault();
    setQuestions([...questions,{
      'questionText' : que.question,
      'option1' : que.op1,
		'option2' : que.op2,
		'option3' : que.op3,
		'option4' : que.op4,
		'correctAnswer' : que.ans,
		'marks' : que.marks,

    }])
    axios.post("http://localhost:8080/managequestion/addquestion/"+uname,
  {
    questionText : que.question,
      option1 : que.op1,
		option2 : que.op2,
		option3 : que.op3,
		option4 : que.op4,
		correctAnswer : que.ans,
		marks : que.marks,
    quizid : quizid
    
  }).then((response)=>{
    console.log(response.data);
    alert("Questions Added Successfully")}).catch((e)=>{
      console.log(e);
      alert("Update Failed")
    });

    setQue({qid: '', fname: '',question: '',
    op1: '',op2: '',op3: '', op4: '',ans:'', marks: ''})
  }

  return (
    <>
    <Header></Header>
    <MDBContainer>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{backgroundColor:'white'}}>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Add Questions</h2>

              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Question' rows={4} name='question' onChange={handleChange} value={que.question}></MDBTextArea>
              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option1' rows={4} name='op1' onChange={handleChange} value={que.op1}></MDBTextArea>
              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option2' rows={4} name='op2' onChange={handleChange} value={que.op2}></MDBTextArea>
              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option3' rows={4} name='op3' onChange={handleChange} value={que.op3}></MDBTextArea>
              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option4' rows={4} name='op4' onChange={handleChange} value={que.op4}></MDBTextArea>
              <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Answer' rows={4} name='ans' onChange={handleChange} value={que.ans}></MDBTextArea>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Marks' name='marks' type='number' size="lg" onChange={handleChange} value={que.marks}/>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={hanldeAdd}>Add</MDBBtn><br/>
              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBTable bordered borderColor="primary" style={{backgroundColor:"white"}}>
      <MDBTableHead>
        <tr>
          <th scope='col'>Question</th>
          <th scope='col'>Option1</th>
          <th scope='col'>Option2</th>
          <th scope='col'>Option3</th>
          <th scope='col'>Option4</th>
          <th scope='col'>Answer</th>
          <th scope='col'>Marks</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {questions.map(function(q,i){
          return(
          <tr key={i}>
          <td>{q.questionText}</td>
          <td>{q.option1}</td>
          <td>{q.option2}</td>
          <td>{q.option3}</td>
          <td>{q.option4}</td>
          <td>{q.correctAnswer}</td>
          <td>{q.marks}</td>
        </tr>)
        })}
      </MDBTableBody>
    </MDBTable>
    </>
  );
}
