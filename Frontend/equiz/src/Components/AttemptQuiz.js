import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useReactToPrint } from "react-to-print";


export default function AttemptQuiz() {

    var style = {
        width: "65%",
        display: "block",
        textAlign: "left",
        boxSizing: "border-box",
        float: "left",
        padding: "0 2em",
        border: "solid",
        justifyContent: 'right', alignItems: 'right'
    }

    var buttonstyle = {
        backgroundColor: 'red',
        color: 'white',
        fontSize: '20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    const componentRef = useRef();
    const { quizid } = useParams();
    const { time } = useParams();
    const [ques, setQues] = useState([{
        questionId: '',
        questionText: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: '',
        marks: ''
    }])

    const [result, setResult] = useState([]);

    const [counter, setCounter] = useState(time * 60);
    const [size, setSize] = useState(0);
    const [choice, setChoice] = useState('');
    const [obtmarks,setObtmarks] = useState(0);
    const [ttlmarks,setTtlmarks] = useState(0);
    const [checked, setChecked] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false
    })
    const [flag, setFlag] = useState(true);
    const [flag1, setFlag1] = useState(true);

    useEffect(
        () => {
            setTimeout(() => { counter > 0 ? setCounter(counter - 1) : handleTimeout()}, 1000);
        }, [counter]);

    useEffect(
        () => {
            getAllQue()
        }, []);
    const handleTimeout=()=>{
        alert("Time Fineshed...");
                handleNaxt();
            setFlag1(false)
    }

    const getAllQue = () => {
        axios.get("http://localhost:8080/managequestion/getallquestion/" + quizid, {}).then((response) => {
            console.log(response.data);
            setQues(response.data);
            let tmarks=0
            for(let i=0;i<response.data.length;i++)
            {
                tmarks += response.data[i].marks; 
            }
            setTtlmarks(tmarks);
        }).catch((e) => {
            console.log(e);
        })
    }

    const handleNaxt = () => {
        if (ques[size].correctAnswer === choice) {
            setObtmarks(obtmarks + ques[size].marks);
        }
        setResult(res=>[...res,{
            questionText: ques[size].questionText,
            option1: ques[size].option1,
            option2: ques[size].option2,
            option3: ques[size].option3,
            option4: ques[size].option4,
            correctAnswer: ques[size].correctAnswer,
            yourAnswer: choice
        }])
        setChoice("")
        setSize(size + 1)
        setChecked({
            option1: false,
            option2: false,
            option3: false,
            option4: false
        })
        if(size===ques.length-1)
        {
            setFlag1(false);
        }
    }

    const handleSubmit = () => {
        if(size<ques.length-1)
        {
        setResult(res=>[...res,...ques.splice(size)])}
        axios.post("http://localhost:8080/result/saveresult/"+sessionStorage.getItem("authenticatedUser"),
            {
                quizid: quizid,
                marks: obtmarks,
                totalMarks: ttlmarks
            }).then((response) => {
                alert("Exam Ended")
            }).catch((e) => { console.log(e) })
        
        setFlag(false);
        setSize(ques.length);
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    //sessionStorage.getItem("authenticatedUser")

    return (
        <>
            <Header></Header>
            {flag ? <div style={{ backgroundColor: "white" }}>
                <h4 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                    <b><i>  {Math.floor(counter / 60) < 10 ? "0" + Math.floor(counter / 60) :
                        Math.floor(counter / 60)}:{(counter % 60) < 10 ? "0" + (counter % 60) : (counter % 60)}
                    </i></b></h4>
                <div style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <fieldset style={style}>
                    {flag1 ?<><h4>Question: {ques[size].questionText}</h4>
                        <h5>A. <input type="radio" onClick={() => { setChoice(ques[size].option1); setChecked({ option1: true }) }} name="option" checked={checked.option1} /> {ques[size].option1}</h5>
                        <h5>B. <input type="radio" onClick={() => { setChoice(ques[size].option2); setChecked({ option2: true }) }} name="option" checked={checked.option2} /> {ques[size].option2}</h5>
                        <h5>C. <input type="radio" onClick={() => { setChoice(ques[size].option3); setChecked({ option3: true }) }} name="option" checked={checked.option3} /> {ques[size].option3}</h5>
                        <h5>D. <input type="radio" onClick={() => { setChoice(ques[size].option4); setChecked({ option4: true }) }} name="option" checked={checked.option4} /> {ques[size].option4}</h5>
                         <button onClick={handleNaxt}>Next</button> </>:<>
                         <h2 style={{color:"green"}}>Thank You For Attempting Quiz...</h2>
                            <button onClick={handleSubmit}>View Result</button></>}
                    </fieldset>
                </div>

            </div> : <div style={{ backgroundColor: 'white' }} ref={componentRef}>
                <div style={{ marginLeft: "20px" }}>
                    <div><br />
                        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}><br />
                            <button onClick={handlePrint} className="print__button" style={buttonstyle}>  Download Response Sheet </button>
                        </div></div>
                    <h2>Result : {obtmarks}/{ttlmarks}</h2>
                    {
                        result.map((r) => {
                            return (
                                <>
                                    <h5>Question: {r.questionText}</h5>
                                    <h6>A: {r.option1}</h6>
                                    <h6>B: {r.option2}</h6>
                                    <h6>C: {r.option3}</h6>
                                    <h6>D: {r.option4}</h6>
                                    <h6>Correct Answer: {r.correctAnswer}</h6>
                                    <h6>Your Answer: {r.yourAnswer}</h6>
                                    <hr></hr>
                                </>
                            )
                        })
                    }
                </div></div>}
        </>
    )
}