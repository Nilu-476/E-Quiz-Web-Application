import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from './Header';

export default function EditQuestion() {

    const { questionid } = useParams();
    const { quizid } = useParams();

    const [que, setQue] = useState({
        quizid: '', questionId: '', questionText: '',
        option1: '', option2: '', option3: '', option4: '', correctAnswer: '', marks: ''
    });

    useEffect(() => {
        axios.get("http://localhost:8080/managequestion/getquestionbyid/"+questionid, {}).
            then((response) => {
                setQue(response.data);
            }).catch((e) => {
                console.log(e);
            })
    }, []);

    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setQue({ ...que, [name]: value, });
    };



    const hanldeUpdate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/managequestion/updatequestion",
            {
                questionId: questionid,
                questionText: que.questionText,
                option1: que.option1,
                option2: que.option2,
                option3: que.option3,
                option4: que.option4,
                correctAnswer: que.correctAnswer,
                marks: que.marks

            }).then((response) => {
                console.log(response.data);
                alert("Questions Updated Successfully");
                window.location = `/view-que/${quizid}`
            }).catch((e) => {
                console.log(e);
                alert("Update Failed")
            });
    }

    return (
        <>
            <Header></Header>
            <MDBContainer>

                <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ backgroundColor: 'white' }}>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Add Questions</h2>

                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Question' rows={4} name='questionText' onChange={handleChange} value={que.questionText}></MDBTextArea>
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option1' rows={4} name='option1' onChange={handleChange} value={que.option1}></MDBTextArea>
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option2' rows={4} name='option2' onChange={handleChange} value={que.option2}></MDBTextArea>
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option3' rows={4} name='option3' onChange={handleChange} value={que.option3}></MDBTextArea>
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Option4' rows={4} name='option4' onChange={handleChange} value={que.option4}></MDBTextArea>
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' contrast id='textAreaExample' label='Answer' rows={4} name='correctAnswer' onChange={handleChange} value={que.correctAnswer}></MDBTextArea>
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Marks' name='marks' type='number' size="lg" onChange={handleChange} value={que.marks} />
                                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={hanldeUpdate}>Update</MDBBtn><br />

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </>
    );
}
