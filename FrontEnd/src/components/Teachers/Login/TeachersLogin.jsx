import React, { useState } from "react";

import "./TeachersLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherLoginPage = () => {
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()
    console.log(userId)
const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const loginData={
        userId,
        password,
    }
    const responce=await axios.post('http://localhost:5000/api/teacher/login',loginData)
console.log(responce)
if(responce.data.status){
    localStorage.setItem("token",responce.data.token)
    navigate('/teachers')

}else{
    setError(responce.data.err.msg)
}
} 
    return (
        <div className="teacher-login-container">
            <h2 className="teacher-login-header">Teachers Login</h2>
            <form className="teacher-login-form" onSubmit={handleSubmit}>
                <div className="teacher-form-group">
                    <label htmlFor="userId">User ID</label>
                    <input 
                        type="text" 
                        id="userId" 
                        name="userId" 
                        placeholder="Enter your User ID" 
                        value={userId}
                        onChange={(e)=>setUserId(e.target.value)}
                        required 
                    />
                </div>

                <div className="teacher-form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}

                        required 
                    />
                </div>
                <h6 className="error">{error}</h6>

                <button type="submit" className="teacher-login-btn">Login</button>
            </form>
        </div>
    );
};

export default TeacherLoginPage;
