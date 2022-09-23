import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBTable } from 'mdb-react-ui-kit';
import Header from "./Header";

export default function ViewResults() {

    const {quizid} = useParams();
    const [result, setResult] = useState([{
        resultId: '',
        prnNo: '',
        quizid: '',
        marks: '',
        studentName: '',
        quizName: '',
        totalMarks: ''
    }])
    const [topic, setTopic] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/result/getbyquiz/"+quizid, {}).then((response) => {
            setResult(response.data);
            console.log(response.data);
            if(response.data != null){
                setTopic(response.data[0].quizName)}
            
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <>
        <div style={{backgroundColor:'white'}}>
            <Header></Header>
            <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{topic}</h3>
            <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Student Results</h3>
            <MDBTable striped hover >
                <thead>
                    <tr>
                        <th>PRN</th>
                        <th>Student Name</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((r) => {
                        return (<tr>
                            <th>{r.prnNo}</th>
                            <th>{r.studentName}</th>
                            <th>{r.marks}</th>
                            <th>{r.totalMarks}</th>
                        </tr>)
                    })}
                </tbody>
            </MDBTable>
            </div>
        </>
    )
}