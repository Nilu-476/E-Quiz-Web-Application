import axios from "axios";
import React,{useState,useEffect} from "react";
import { MDBTable } from 'mdb-react-ui-kit';
import Header from "./Header";

export default function MyPeformance(){

    const [result, setResult] = useState([{
        resultId : '',
		prnNo : '',
		quizid : '',
		marks : '',
		studentName : '',
		quizName : '',
		totalMarks : ''
    }])

    useEffect(()=>{
        axios.get("http://localhost:8080/result/getbystud/"+sessionStorage.getItem("authenticatedUser"),{}).then((response)=>{
        setResult(response.data);
        console.log(response.data);
        }).catch((e)=>{
            console.log(e);
        })
    },[])

    return(
        <>
        <Header></Header>
        <div style={{backgroundColor:'white'}}>
        <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>My Performance</h3>
        <MDBTable striped hover >
            <thead>
                <tr>
                    <th>Quiz Name</th>
                    <th>Obtained Marks</th>
                    <th>Total Marks</th>
                </tr>
            </thead>
            <tbody>
                {result.map((r)=>{
                    return(<tr>
                    <th>{r.quizName}</th>
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