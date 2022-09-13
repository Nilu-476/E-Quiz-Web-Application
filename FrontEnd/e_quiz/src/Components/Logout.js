import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function Logout()
{
      let dispatch= useDispatch()
    let navigate = useNavigate()
    
    useEffect(()=>{
        dispatch({type:"save",payload:{uname:"",password:""}})
    navigate("/")
    
    },[])
   
}