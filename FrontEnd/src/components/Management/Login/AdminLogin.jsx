// Importing React
import React, { useState } from "react";

// Importing CSS for Teacher's login
import "./AdminLogin.css";

// Teachers Login Page Component
const AdminLoginPage = () => {
    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    console.log(userId)
const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const loginData={
        userId,
        password,
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
