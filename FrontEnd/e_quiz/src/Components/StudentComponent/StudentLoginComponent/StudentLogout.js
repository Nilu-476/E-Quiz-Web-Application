import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function StudentLogout()
{
    let navigate = useNavigate()
    
    useEffect(()=>{

        let data=sessionStorage.getItem('student')
        sessionStorage.clear(data) ;    
        navigate("/");
    },[])
   
}