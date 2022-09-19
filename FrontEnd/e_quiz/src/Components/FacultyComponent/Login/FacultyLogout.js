import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyLogout()
{
      let navigate = useNavigate()
    
      useEffect(()=>{
  
          let data=sessionStorage.getItem('faculty') ;
          sessionStorage.clear(data);
          navigate("/");
      },[])
}