import axios from "axios";
import React,{useState,useEffect} from "react";
import { MDBTable } from 'mdb-react-ui-kit';
import Header from "./Header";

export default function ViewAllStudents(){

    const [students, setStudents] = useState([{
        prnNo : '',
		firstName : '',
		middleName : '',
		lastName : '',
		email : '',
		mobileNo : '',
		gender : '',
		dateOfBirth : '',
		username : '',
		password : ''
    }])

    useEffect(()=>{
        axios.get("http://localhost:8080/student/getallstudentinfo",{}).then((response)=>{
            setStudents(response.data);
        console.log(response.data);
        }).catch((e)=>{
            console.log(e);
        })
    },[])

    return(
        <>
        <Header></Header>
        <div style={{backgroundColor:'white'}}>
        <h3 style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Students Information</h3>
        <MDBTable striped hover >
            <thead>
                <tr>
                    <th>PRN</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {students.map((r)=>{
                    return(<tr>
                    <th>{r.prnNo}</th>
                    <th>{r.firstName} {r.middleName} {r.lastName}</th>
                    <th>{r.email}</th>
                    <th>{r.mobileNo}</th>
                </tr>)
                })}
            </tbody>
        </MDBTable>
        </div>
        </>
    )
}