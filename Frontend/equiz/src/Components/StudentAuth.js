import { Component } from "react";
import { Outlet, Navigate } from 'react-router-dom'
class StudentAuth extends Component
{
    render()
    {
        if(sessionStorage.getItem("userType")==="student")
        {
            return <Outlet/>
        }
        else{
            alert("Unautherized Access")
            return <Navigate to="/"/>
        }
    }
}
export default StudentAuth;