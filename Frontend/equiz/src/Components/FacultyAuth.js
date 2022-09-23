import { Component } from "react";
import { Outlet, Navigate } from 'react-router-dom'
class FacultyAuth extends Component
{
    render()
    {
        if(sessionStorage.getItem("userType")==="faculty")
        {
            return <Outlet/>
        }
        else{
            alert("Unautherized Access")
            return <Navigate to="/"/>
        }
    }
}
export default FacultyAuth;