import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(){
    const navigate =useNavigate()

    useEffect(()=>{
        const login_status=localStorage.getItem("isLoggedIn")
        console.log("isLoggedIn ",login_status)
        if (!login_status || login_status!=="true"){
            navigate('/login')
        }
    },[navigate])
    return null
}