import React, { useState } from "react";
import axios from 'axios'
import "./AdminLogin.css";
import { useNavigate } from 'react-router-dom'; 

const AdminLoginPage = () => {
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    console.log(userId)
const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log('helo')
    const loginData={
        userId, password
    }
    try{
      const response= await fetch('http://localhost:5000/api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({loginData}),
            credentials: 'include', 

          });
          const data =await response.json()
          if(data.success){
            localStorage.setItem("token",data.token)
            navigate(data.redirect)
          }else{
              }
              }catch(err){
                console.log(err)
        console.log('Invalid username or password')
    }
} 
    return (
        <div className="teacher-login-container">
            <h2 className="teacher-login-header">Admin Login</h2>
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

                <button type="submit" className="teacher-login-btn">Login</button>
            </form>
        </div>
    );
};

export default AdminLoginPage;
